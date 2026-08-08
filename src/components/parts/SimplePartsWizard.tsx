import { useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
} from 'lucide-react'
import { BUSINESS } from '../../data/content'
import {
  AUDIO_CHOICES,
  CAMERA_CHOICES,
  CASE_STYLE_OPTIONS,
  CHARGING_CHOICES,
  MODEL_GROUPS,
  needHasColorStep,
  needHasOptionStep,
  needSkipsOptions,
  OTHER_CHOICES,
  SCREEN_CHOICES,
  SIMPLE_NEEDS,
  type SimpleNeed,
} from '../../data/simple-catalog'
import {
  COLOR_HEX,
  getBackGlassColorsForModel,
  getCaseColorsForModel,
  PART_IMAGES,
} from '../../data/iphone-colors'
import IphoneColorVisual from '../IphoneColorVisual'

type Step = 'need' | 'model' | 'option' | 'color' | 'done'

function totalSteps(need: SimpleNeed | null): number {
  if (!need) return 3
  if (need === 'case') return 4
  if (need === 'back-glass') return 3
  if (needHasOptionStep(need)) return 3
  return 2
}

function stepNumber(step: Step, need: SimpleNeed | null): number {
  if (!need || step === 'need') return 1
  if (step === 'model') return 2
  if (step === 'option') return 3
  if (step === 'color') return need === 'case' ? 4 : 3
  if (step === 'done') return totalSteps(need)
  return 1
}

function colorStyle(color: string): CSSProperties {
  const hex = COLOR_HEX[color]
  if (!hex) return { backgroundColor: '#3a3a3c', borderColor: '#555558' }
  if (color === 'Clear') {
    return {
      background:
        'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 100%)',
      borderColor: hex.border,
    }
  }
  return { backgroundColor: hex.bg, borderColor: hex.border }
}

interface Props {
  initialNeed?: SimpleNeed
}

export default function SimplePartsWizard({ initialNeed }: Props) {
  const [need, setNeed] = useState<SimpleNeed | null>(initialNeed ?? null)
  const [model, setModel] = useState('')
  const [optionLabel, setOptionLabel] = useState('')
  const [caseStyle, setCaseStyle] = useState(CASE_STYLE_OPTIONS[0].style)
  const [color, setColor] = useState('')
  const [step, setStep] = useState<Step>(initialNeed ? 'model' : 'need')

  const needMeta = SIMPLE_NEEDS.find((n) => n.id === need)

  const colors = useMemo(() => {
    if (!model || !need) return []
    if (need === 'back-glass') return getBackGlassColorsForModel(model)
    if (need === 'case') return getCaseColorsForModel(model)
    return []
  }, [model, need])

  const productName = useMemo(() => {
    if (!needMeta) return ''
    if (need === 'battery') return 'Battery replacement'
    if (need === 'face-id') return 'Face ID repair'
    if (need === 'back-glass' && color) return `Back glass — ${color}`
    if (need === 'case' && color) return `${caseStyle} — ${color}`
    if (optionLabel) return optionLabel
    return needMeta.label
  }, [need, needMeta, color, caseStyle, optionLabel])

  const requestUrl = useMemo(() => {
    if (!needMeta) return '/request'
    const params = new URLSearchParams({
      service: needMeta.service,
      product: productName,
    })
    if (model) params.set('model', model)
    if (color) params.set('color', color)
    return `/request?${params.toString()}`
  }, [needMeta, productName, model, color])

  function pickNeed(id: SimpleNeed) {
    setNeed(id)
    setModel('')
    setOptionLabel('')
    setColor('')
    setStep('model')
  }

  function pickModel(full: string) {
    setModel(full)
    setColor('')
    if (!need) return
    if (need === 'case') {
      setStep('option')
      return
    }
    if (need === 'back-glass') {
      setStep('color')
      return
    }
    if (needHasOptionStep(need)) {
      setStep('option')
      return
    }
    if (needSkipsOptions(need)) {
      setStep('done')
      return
    }
    setStep('done')
  }

  function pickOption(_id: string, label: string) {
    setOptionLabel(label)
    setStep('done')
  }

  function pickCaseStyle(style: typeof caseStyle) {
    setCaseStyle(style)
    setColor('')
  }

  function goBack() {
    if (step === 'model') {
      setStep('need')
      setNeed(null)
      return
    }
    if (step === 'option') {
      setStep('model')
      return
    }
    if (step === 'color') {
      if (need === 'case') setStep('option')
      else setStep('model')
      return
    }
    if (step === 'done') {
      if (need && needHasColorStep(need)) setStep('color')
      else if (need && needHasOptionStep(need)) setStep('option')
      else setStep('model')
    }
  }

  const isPro = /Pro/.test(model)
  const currentStep = stepNumber(step, need)
  const maxSteps = totalSteps(need)

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      {need && step !== 'need' && (
        <div className="mb-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-2 text-sm text-silver-300 hover:border-white/25 hover:text-silver-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: maxSteps }, (_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i + 1 <= currentStep ? 'bg-gold' : 'bg-white/15'
                }`}
              />
            ))}
            <span className="ml-1 text-xs text-silver-400">
              Step {Math.min(currentStep, maxSteps)} of {maxSteps}
            </span>
          </div>
        </div>
      )}

      {/* Step 1 — What do you need? */}
      {step === 'need' && (
        <div>
          <h2 className="font-display text-2xl font-bold text-silver-50 sm:text-3xl">
            What do you need?
          </h2>
          <p className="mt-1 text-sm text-silver-400">Tap one picture</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {SIMPLE_NEEDS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => pickNeed(item.id)}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/50 hover:bg-ink-800/60 active:scale-[0.98]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-display text-sm font-semibold text-silver-50 sm:text-base">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-silver-400">{item.hint}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 — Which iPhone? */}
      {step === 'model' && needMeta && (
        <div>
          <h2 className="font-display text-2xl font-bold text-silver-50 sm:text-3xl">
            Which iPhone?
          </h2>
          <p className="mt-1 text-sm text-silver-400">
            For: <span className="text-gold">{needMeta.label}</span>
          </p>

          <div className="mt-6 space-y-5">
            {MODEL_GROUPS.map((group) => (
              <div key={group.series}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-silver-500">
                  iPhone {group.series}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {group.models.map((m) => (
                    <button
                      key={m.full}
                      type="button"
                      onClick={() => pickModel(m.full)}
                      className={`rounded-xl border px-3 py-3.5 text-sm font-semibold transition active:scale-[0.98] ${
                        model === m.full
                          ? 'border-gold bg-gold/15 text-gold'
                          : 'border-white/10 bg-white/[0.03] text-silver-100 hover:border-gold/40'
                      }`}
                    >
                      {m.short}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'm not sure which iPhone I have. Can you help?")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 py-3 text-sm text-silver-400 hover:border-gold/30 hover:text-gold"
          >
            <HelpCircle className="h-4 w-4" />
            Not sure? Ask on WhatsApp
          </a>
        </div>
      )}

      {/* Step 3 — Options (screen, camera, case style, etc.) */}
      {step === 'option' && needMeta && model && (
        <div>
          {need === 'case' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                Case type
              </h2>
              <p className="mt-1 text-sm text-silver-400">
                {model.replace('iPhone ', 'iPhone ')}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CASE_STYLE_OPTIONS.map((c) => (
                  <button
                    key={c.style}
                    type="button"
                    onClick={() => {
                      pickCaseStyle(c.style)
                      setStep('color')
                    }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="p-3 text-center text-sm font-semibold text-silver-50">
                      {c.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          )}

          {need === 'screen' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                Screen quality
              </h2>
              <p className="mt-1 text-sm text-silver-400">{model}</p>
              <div className="mt-5 grid gap-3">
                {SCREEN_CHOICES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pickOption(c.id, `${c.label} screen`)}
                    className="flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-white">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-between pr-4">
                      <div>
                        <p className="font-display text-lg font-semibold text-silver-50">
                          {c.label}
                        </p>
                        <p className="text-sm text-silver-400">{c.hint}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gold" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {need === 'camera' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                Which camera?
              </h2>
              <p className="mt-1 text-sm text-silver-400">{model}</p>
              <div className="mt-5 grid gap-3">
                {CAMERA_CHOICES.filter((c) => !c.proOnly || isPro).map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pickOption(c.id, c.label)}
                    className="flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-white">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pr-4 text-base font-semibold text-silver-50">
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {need === 'charging' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                Charging problem
              </h2>
              <p className="mt-1 text-sm text-silver-400">{model}</p>
              <div className="mt-5 grid gap-3">
                {CHARGING_CHOICES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pickOption(c.id, c.label)}
                    className="flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-white">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pr-4 text-base font-semibold text-silver-50">
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {need === 'audio' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                Sound problem
              </h2>
              <p className="mt-1 text-sm text-silver-400">{model}</p>
              <div className="mt-5 grid gap-3">
                {AUDIO_CHOICES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pickOption(c.id, c.label)}
                    className="flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-white">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="pr-4 text-base font-semibold text-silver-50">
                      {c.label}
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}

          {need === 'other' && (
            <>
              <h2 className="font-display text-2xl font-bold text-silver-50">
                What&apos;s wrong?
              </h2>
              <p className="mt-1 text-sm text-silver-400">{model}</p>
              <div className="mt-5 grid gap-2">
                {OTHER_CHOICES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => pickOption(c.id, c.label)}
                    className="rounded-2xl border border-white/10 bg-ink-800/40 px-5 py-4 text-left text-base font-semibold text-silver-50 transition hover:border-gold/40 active:scale-[0.98]"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Colour — back glass or case */}
      {step === 'color' && (need === 'case' || need === 'back-glass') && model && (
        <div>
          <h2 className="font-display text-2xl font-bold text-silver-50">
            Pick colour
          </h2>
          <p className="mt-1 text-sm text-silver-400">
            {need === 'case'
              ? `${caseStyle.replace(' Case', '')} · ${model.replace('iPhone ', '')}`
              : model}
          </p>
          {need === 'back-glass' && (
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white">
              <img
                src={PART_IMAGES.backGlassColors}
                alt="Back glass colour examples"
                className="max-h-40 w-full object-cover"
              />
            </div>
          )}
          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setColor(c)
                  setStep('done')
                }}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-3 transition hover:border-gold/40 active:scale-[0.98]"
              >
                <span
                  className="h-12 w-12 rounded-full border-2 shadow-inner"
                  style={colorStyle(c)}
                />
                <span className="text-center text-[11px] leading-tight text-silver-200">
                  {c}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Done — confirm & order */}
      {step === 'done' && needMeta && (
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
            <Check className="h-7 w-7 text-gold" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-silver-50">
            Ready to order
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/40 text-left">
            {(need === 'back-glass' || need === 'case') && color ? (
              <IphoneColorVisual
                color={color}
                model={model}
                variant={need === 'case' ? 'case' : 'back-glass'}
              />
            ) : need === 'face-id' ? (
              <div className="aspect-[2/1] overflow-hidden bg-white">
                <img
                  src={PART_IMAGES.faceIdParts}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={needMeta.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <div className="space-y-2 p-5 text-sm">
              <p className="text-silver-400">You selected</p>
              <p className="font-display text-lg font-semibold text-silver-50">
                {productName}
              </p>
              {model && (
                <p className="text-silver-300">{model}</p>
              )}
            </div>
          </div>

          <Link to={requestUrl} className="btn-primary mt-6 w-full !py-4 text-base">
            Continue — add name & send on WhatsApp
            <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
              `Hi, I need: ${productName}${model ? ` for ${model}` : ''}${color ? ` (${color})` : ''}`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-center text-sm text-silver-400 hover:text-gold"
          >
            Skip — send on WhatsApp now
          </a>
        </div>
      )}
    </div>
  )
}
