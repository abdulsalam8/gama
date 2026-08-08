import { COLOR_HEX } from '../data/iphone-colors'

interface Props {
  color: string
  model?: string
  variant?: 'back-glass' | 'case'
}

export default function IphoneColorVisual({ color, model, variant = 'back-glass' }: Props) {
  const style = COLOR_HEX[color] ?? { bg: '#3a3a3c', border: '#555558' }
  const isClear = color === 'Clear'
  const isTitanium = color.includes('Titanium')

  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-b from-ink-800 to-ink-950 p-6">
      {/* Ambient glow in selected colour */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${style.bg}88, transparent 70%)`,
        }}
      />

      {/* iPhone silhouette */}
      <div className="relative w-[45%] max-w-[120px]">
        <div
          className="relative aspect-[9/19] overflow-hidden rounded-[1.75rem] shadow-2xl"
          style={{
            border: `2px solid ${style.border}`,
            background: isClear
              ? 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)'
              : isTitanium
                ? `linear-gradient(145deg, ${style.shine ?? style.bg} 0%, ${style.bg} 40%, ${style.border} 100%)`
                : style.bg,
            boxShadow: `0 20px 40px ${style.bg}66, inset 0 1px 0 rgba(255,255,255,0.15)`,
          }}
        >
          {/* Camera bump */}
          <div
            className="absolute left-1/2 top-[14%] h-[11%] w-[38%] -translate-x-1/2 rounded-xl"
            style={{
              background: isClear ? 'rgba(0,0,0,0.5)' : `${style.border}`,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          {/* Apple logo hint */}
          <div
            className="absolute left-1/2 top-[48%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
            style={{ background: isClear ? '#fff' : style.border }}
          />
          {variant === 'case' && (
            <div className="absolute inset-[3px] rounded-[1.5rem] border border-white/10" />
          )}
        </div>

        <p className="mt-4 text-center text-xs font-medium text-silver-200">{color}</p>
        {model && (
          <p className="mt-0.5 text-center text-[10px] text-silver-400">{model}</p>
        )}
      </div>
    </div>
  )
}
