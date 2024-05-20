<style lang="css">
.foo {
  height: 20px;
  width: 20px;
  /* stylelint-disable-next-line @stylistic/property-case */
  DISPLAY: block;
  /* stylelint-disable-next-line property-disallowed-list */
  widows: 2;
}
</style>

<style lang="scss">
.foo {
  @include bar($baz);
  // stylelint-disable-next-line scss/dollar-variable-colon-space-before
  $baz : 2;
  // stylelint-disable-next-line @stylistic/property-case
  DISPLAY: block;
  // stylelint-disable-next-line property-disallowed-list
  widows: 2;
  // stylelint-disable-next-line aurora/selector-nested-combinator-position
  > {
    .bar {
      resize: none;
    }
  }
}
</style>
