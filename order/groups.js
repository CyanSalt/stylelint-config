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
  'block-size',
  'min-block-size',
  'max-block-size',
  'inline-size',
  'min-inline-size',
  'max-inline-size',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',

  // Margin
  'margin',
  'margin-block',
  'margin-block-start',
  'margin-block-end',
  'margin-inline',
  'margin-inline-start',
  'margin-inline-end',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',

  // Padding
  'padding',
  'padding-block',
  'padding-block-start',
  'padding-block-end',
  'padding-inline',
  'padding-inline-start',
  'padding-inline-end',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  // Border (Size)
  'border',
  'border-block',
  'border-block-width',
  'border-block-start',
  'border-block-start-width',
  'border-block-end',
  'border-block-end-width',
  'border-inline',
  'border-inline-width',
  'border-inline-start',
  'border-inline-start-width',
  'border-inline-end',
  'border-inline-end-width',
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
  'font-family',
  'font-style',
  'font-variant',
  'font-weight',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'src', // @font-face
  'line-height',

  // Direction
  'writing-mode',
  'direction',
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
  'break-before',
  'break-after',
  'break-inside',
]

const visualization = [
  // Overflow
  'overflow',
  'overflow-x',
  'overflow-y',
  'overflow-scrolling',

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

  // Replaced elements
  'object-fit',
  'object-position',
  'image-orientation',

  // Background
  'background',
  'background-image',
  'background-position',
  'background-position-x',
  'background-position-y',
  'background-size',
  'background-repeat',
  'background-origin',
  'background-clip',
  'background-attachment',
  'background-color',

  // Border
  'border-style',
  'border-color',
  'border-block-style',
  'border-block-color',
  'border-block-start-style',
  'border-block-end-style',
  'border-block-start-color',
  'border-block-end-color',
  'border-inline-style',
  'border-inline-color',
  'border-inline-start-style',
  'border-inline-end-style',
  'border-inline-start-color',
  'border-inline-end-color',
  'border-top-style',
  'border-top-color',
  'border-right-style',
  'border-right-color',
  'border-bottom-style',
  'border-bottom-color',
  'border-left-style',
  'border-left-color',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',

  // Outline
  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
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
  'mask-image',
  'mask-mode',
  'mask-repeat',
  'mask-position',
  'mask-clip',
  'mask-origin',
  'mask-size',
  'mask-composite',
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
  'transition-property',
  'transition-duration',
  'transition-timing-function',
  'transition-delay',

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
