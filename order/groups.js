const content = [
  'content',
  'counter-increment',
  'counter-reset',
  'quotes',
]

const positioning = [
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'z-index',
]

const box = [
  'display',

  // Flex/grid items
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',

  'grid-area',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',

  'justify-self',
  'align-self',
  'order',

  // Flex boxes
  'flex-flow',
  'flex-direction',
  'flex-wrap',

  // Grid boxes
  'grid',
  'grid-template',
  'grid-template-rows',
  'grid-template-columns',
  'grid-template-areas',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',

  // Gap
  'gap', // deprecated (for grid)
  'grid-gap',
  'grid-row-gap', // deprecated
  'grid-column-gap', // deprecated
  'row-gap',
  'column-gap',

  // Flex/grid alignment
  'justify-content',
  'justify-items',
  'align-content',
  'align-items',

  // Table
  'table-layout',
  'empty-cells',
  'caption-side',
  'border-collapse',
  'border-spacing',

  // Float
  'float',
  'clear',

  // Box sizing
  'box-sizing',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',

  // Margin
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',

  // Padding
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  // Border (Size)
  'border',
  'border-width',
  'border-top',
  'border-top-width',
  'border-right',
  'border-right-width',
  'border-bottom',
  'border-bottom-width',
  'border-left',
  'border-left-width',
]

const typography = [
  // Multi-column
  'columns',
  'column-count',
  'column-width',
  'column-fill',
  'column-span',
  'orphans',
  'widows',

  // Color
  'color',

  // Font
  'font',
  'font-style',
  'font-variant',
  'font-weight',
  'font-size',
  'font-family',
  'font-size-adjust',
  'font-stretch',
  'line-height',

  // Direction
  'direction',
  'writing-mode',
  'text-orientation',

  // Spacing and alignment
  'letter-spacing',
  'white-space',
  'tab-size',
  'text-align',
  'text-align-last',
  'text-justify',
  'vertical-align',
  'text-indent',
  'text-overflow',
  'word-break',
  'word-spacing',
  'overflow-wrap',

  // Style
  'text-transform',
  'text-decoration',
  'text-shadow',
  'hyphens',
  'unicode-bidi',

  // Page breaking
  'break-after',
  'break-before',
  'break-inside',

  // Font face
  'src',
]

const visualization = [
  // SVG
  'fill',
  'fill-rule',
  'fill-opacity',
  'stroke',

  // List
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',

  // Image
  'object-fit',
  'object-position',
  'image-orientation',

  // Background
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-repeat',
  'background-size',

  // Border
  'border-color',
  'border-style',
  'border-top-color',
  'border-top-style',
  'border-right-color',
  'border-right-style',
  'border-bottom-color',
  'border-bottom-style',
  'border-left-color',
  'border-left-style',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',

  // Outline
  'outline',
  'outline-color',
  'outline-style',
  'outline-width',
  'outline-offset',

  // Multi-column
  'column-rule',
  'column-rule-width',
  'column-rule-style',
  'column-rule-color',

  // Filter
  'visibility',
  'opacity',
  'box-shadow',
  'box-decoration-break',
  'filter',
  'backdrop-filter',
  'mix-blend-mode',
  'background-blend-mode',
  'isolation',

  // Mask
  'mask',
  'mask-clip',
  'mask-composite',
  'mask-image',
  'mask-mode',
  'mask-origin',
  'mask-position',
  'mask-repeat',
  'mask-size',
  'clip',
  'clip-path',
  'clip-rule', // SVG
]

const transform = [
  'transform',
  'transform-origin',
  'transform-style',
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'zoom',
]

const animation = [
  // Transition
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',

  // Animation
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-play-state',

  'will-change',
]

const interaction = [
  'cursor',
  'resize',
  'user-select',
  'touch-action',
  'pointer-events',
]

module.exports = {
  content,
  positioning,
  box,
  typography,
  visualization,
  transform,
  animation,
  interaction,
}
