type StackIconProps = { brand: 'framer' | 'figma' | 'photoshop' | 'contra' }

export function StackIcon({ brand }: StackIconProps) {
  if (brand === 'framer') return <span className="stack-icon stack-icon-framer" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 3h14v6H5l7 6H5v6l7-6h7v-6z" /></svg></span>
  if (brand === 'figma') return <span className="stack-icon stack-icon-figma" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="8" cy="5" r="3" /><circle cx="16" cy="5" r="3" /><circle cx="8" cy="12" r="3" /><circle cx="16" cy="12" r="3" /><path d="M8 15v3a3 3 0 0 0 6 0v-3z" /></svg></span>
  if (brand === 'photoshop') return <span className="stack-icon stack-icon-photoshop" aria-hidden="true"><b>Ps</b></span>
  return <span className="stack-icon stack-icon-contra" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2l2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3z" /></svg></span>
}
