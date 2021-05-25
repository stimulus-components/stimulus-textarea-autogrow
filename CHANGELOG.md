# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.0.0] - 2021-05-25

### Chore

- Moving from Snowpack to Vite
- Using `stimulus` as external library reducing bundle size from `40.72kb` to `0.67kb`.
- Moving to TypeScript
- Upgrading Node to 14.17.0

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property

```diff
- <textarea data-controller="textarea-autogrow" data-textarea-autogrow-resize-debounce-delay="500">
+ <textarea data-controller="textarea-autogrow" data-textarea-autogrow-resize-debounce-delay-value="500">
```

## [1.0.0] - 2020-10-15

### Added

- Adding controller
