# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [9.6.3-rc.6](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.3-rc.5...v9.6.3-rc.6) (2024-12-26)

### Features

-   remember last selected station for rapid scan conditionally ([f472028](https://bitbucket.org/leadliaisondev/gocv2/commits/f472028316c4e610ee70b4986ae0f9cbc2ad99b6))

### Bug Fixes

-   cancel group scanning not working ([6ec52c6](https://bitbucket.org/leadliaisondev/gocv2/commits/6ec52c66009fcbe27eab6bd342c034b1692166a3))
-   normal scan and group scan share loading state ([e0882ae](https://bitbucket.org/leadliaisondev/gocv2/commits/e0882ae5de2b966e673a9ccb825c80b4444c9fb3))
-   only one submission submitted from group scanning ([fb37072](https://bitbucket.org/leadliaisondev/gocv2/commits/fb37072b4e113fb3f11fb6ded8ac0b2c58c334b7))
-   reLaunch group scan not append to the previous taken submissions ([4cf33ce](https://bitbucket.org/leadliaisondev/gocv2/commits/4cf33ce239387313b11e6fb230f110db1c954d09))

### Refactor

-   remove unnecessary state ([64bb73b](https://bitbucket.org/leadliaisondev/gocv2/commits/64bb73b093eeb23bae241619a7286b33eec9a217))

### [9.6.3-rc.5](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.3-rc.3...v9.6.3-rc.5) (2024-12-24)

### Features

-   check permissions before save contact ([04c13d1](https://bitbucket.org/leadliaisondev/gocv2/commits/04c13d1b82e7caa5bf05b35ac960189fefeadfc2))
-   save a lead to contact ([13332dc](https://bitbucket.org/leadliaisondev/gocv2/commits/13332dc789e01ba3f13d1857f27133c235ca25d4))
-   use the new contacts plugin ([f730c8d](https://bitbucket.org/leadliaisondev/gocv2/commits/f730c8d0e2d53252e4e33049e71685ca69bb75d5))

### Bug Fixes

-   conditionally save file locally based on 'enableToSaveLocally' parameter ([df283ab](https://bitbucket.org/leadliaisondev/gocv2/commits/df283ab1741caa10dbb8b5b4d075c416c0969082))
-   ensure the method for saving the file locally remains encapsulated. ([a8f351a](https://bitbucket.org/leadliaisondev/gocv2/commits/a8f351ab7d05eebfa84649f217731c6e7afd4748))
-   **goc:** extract recommended props only to resolve missing props goc component. ([cb5e6e6](https://bitbucket.org/leadliaisondev/gocv2/commits/cb5e6e695a436b59a92729e4d16026c3b38c6e8e))
-   increase upload timeout for app store. ([0346b9c](https://bitbucket.org/leadliaisondev/gocv2/commits/0346b9cd0d587b83c681e46422a824bac46235b7))
-   remove variant from goc component. ([93684f9](https://bitbucket.org/leadliaisondev/gocv2/commits/93684f9e0f739187b48afb9f5c43599278852078))
-   Scanner Causes Labels to be Submitted instead of Values ([c8c30af](https://bitbucket.org/leadliaisondev/gocv2/commits/c8c30af2c165708da244afa140abc36568d0dd85))
-   we can't create a vcard if company is empty ([00d8bbf](https://bitbucket.org/leadliaisondev/gocv2/commits/00d8bbfb27aba5fe669c2fe69ef8a664d8688410))

### Chore

-   **release:** 9.6.3-rc.4 ([2837c79](https://bitbucket.org/leadliaisondev/gocv2/commits/2837c79a98d269bdf082786ca3bc00ff56b98cec))

### Style

-   optimize imports ([ccf3edf](https://bitbucket.org/leadliaisondev/gocv2/commits/ccf3edf4137f434cd4260554cfdd4fac65ad2e80))

### Refactor

-   add save as contact action under user permission ([a386c5d](https://bitbucket.org/leadliaisondev/gocv2/commits/a386c5dd75c1eb8fdf9d1ed436d87bd0fce31bf8))
-   show toast if contacts permission is not granted ([ebc1248](https://bitbucket.org/leadliaisondev/gocv2/commits/ebc1248533a04dbfe54f5f69a59fc7d71866df18))

### [9.6.3-rc.4](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.5.14-rc.11...v9.6.3-rc.4) (2024-12-23)

### Features

-   add priority to downloading files on caching service based on file type ([ea1e860](https://bitbucket.org/leadliaisondev/gocv2/commits/ea1e86007494322f7586b0c017e3a9722ad8ae8b))
-   add process loader for file upload. ([4e612cd](https://bitbucket.org/leadliaisondev/gocv2/commits/4e612cd70fab95f96d1ea7286e8fbaaa9e00392e))
-   add sentry sourcemaps ([b6ed97a](https://bitbucket.org/leadliaisondev/gocv2/commits/b6ed97ad8070f4866b5da7b39fb4d6c4489e07ff))
-   check permissions before save contact ([04c13d1](https://bitbucket.org/leadliaisondev/gocv2/commits/04c13d1b82e7caa5bf05b35ac960189fefeadfc2))
-   customize rating icons and count ([68e3643](https://bitbucket.org/leadliaisondev/gocv2/commits/68e364332c088bec92ec9eb283fe7f104573c0e2))
-   display toast notification after successfully and error updating profile picture. ([b69a6dc](https://bitbucket.org/leadliaisondev/gocv2/commits/b69a6dc68425b8e8e3cd52f6cda1c8a05e360642))
-   fallback to intelliScan data if there's no returned data from social enrichment ([a57366d](https://bitbucket.org/leadliaisondev/gocv2/commits/a57366dd238a0c26947b3af0f513fa135095c239))
-   save a lead to contact ([13332dc](https://bitbucket.org/leadliaisondev/gocv2/commits/13332dc789e01ba3f13d1857f27133c235ca25d4))
-   upload profile picture using camera or from gallery. ([fcfc286](https://bitbucket.org/leadliaisondev/gocv2/commits/fcfc286a829656e303c3a542655b2d9cb195bc72))
-   use the new contacts plugin ([f730c8d](https://bitbucket.org/leadliaisondev/gocv2/commits/f730c8d0e2d53252e4e33049e71685ca69bb75d5))

### Bug Fixes

-   accessability clicks on avatar to change profile photo. ([5cde57b](https://bitbucket.org/leadliaisondev/gocv2/commits/5cde57bfda1d9785e8b6ed6bb2166f7ffeb4ff07))
-   add missing icon to activation select component. ([3abf484](https://bitbucket.org/leadliaisondev/gocv2/commits/3abf484f0f66c92bd36c0830046a4a4537b82c8c))
-   align border color for text and textarea inputs. ([f34ad3a](https://bitbucket.org/leadliaisondev/gocv2/commits/f34ad3ada8dbd0a63a05af1f31b4bc3f70a5669d))
-   broken UI issue in the user invitation select element on the Admin page. ([21ab159](https://bitbucket.org/leadliaisondev/gocv2/commits/21ab159ed07ef8ec0118f0b6651fd4debf0c978c))
-   build issue on iOS lane by adding "allowProvisioningUpdates" parameter. ([7accc2f](https://bitbucket.org/leadliaisondev/gocv2/commits/7accc2f9a9dc43ccaceeb1ab98b892e3f8e86a31))
-   side menu app environment doesn't change when user login and logout in different environments ([efc4483](https://bitbucket.org/leadliaisondev/gocv2/commits/efc448300f54d557fddd289df1c12851b401bf26))
-   split validators on text and textarea elements. ([ac5b901](https://bitbucket.org/leadliaisondev/gocv2/commits/ac5b90105cabfff7cdf7998ef6fb173198a26b4f))
-   text element validation ([87b41d3](https://bitbucket.org/leadliaisondev/gocv2/commits/87b41d3a3e79d04295e3b3bee35921b8bf8a48a6))
-   text input error not appear on submit ([dde000e](https://bitbucket.org/leadliaisondev/gocv2/commits/dde000e6c0eba46a46793c43ac1fb60195cfc6ef))
-   text inputs error indicator ([4965329](https://bitbucket.org/leadliaisondev/gocv2/commits/49653293071ba1418ffbc75c50acbba2a56f52b7))
-   the app doesn't open on ipad pro ([c2b81df](https://bitbucket.org/leadliaisondev/gocv2/commits/c2b81dfbfa87fff49a849abab4051930d1980bd5))
-   use GOCCamera and GOCCropper to updating the profile picture. ([c959332](https://bitbucket.org/leadliaisondev/gocv2/commits/c959332bba6c5d9c0870a062ccacd57307abb2e8))
-   validation and UI issues for textarea and text elements ([13ad46f](https://bitbucket.org/leadliaisondev/gocv2/commits/13ad46f3581a48ef4656d85c9b792adab7fbe17c))

### Chore

-   **release:** 9.5.14-rc.12 ([5f7ef31](https://bitbucket.org/leadliaisondev/gocv2/commits/5f7ef31201c964729a3c1d2d9039ea04acc1bed6))
-   **release:** 9.6.3-rc.2 ([0b58f26](https://bitbucket.org/leadliaisondev/gocv2/commits/0b58f265bba33f810096aa4d8bd3ff75207cb696))
-   **release:** 9.6.3-rc.3 ([61017aa](https://bitbucket.org/leadliaisondev/gocv2/commits/61017aa096cd2a9f878c91ef2c3b03de47fd92aa))
-   upgrade angular to the latest minor version ([e6d00d2](https://bitbucket.org/leadliaisondev/gocv2/commits/e6d00d2ab0898ad2bf6e4cddf6f9c0cb97167247))

### Refactor

-   fastlane ([641e2aa](https://bitbucket.org/leadliaisondev/gocv2/commits/641e2aa1f25873994cd533d401c44d750d61d50f))
-   make fields valid on focus until it's dirty ([829745c](https://bitbucket.org/leadliaisondev/gocv2/commits/829745c0d790acfede04fd6cd4f88d0bc026ccf3))
-   set menu icon for global. ([9688023](https://bitbucket.org/leadliaisondev/gocv2/commits/96880231fa3aa9d12a7d395ffbe81a8d9d3144a8))
-   show toast if contacts permission is not granted ([ebc1248](https://bitbucket.org/leadliaisondev/gocv2/commits/ebc1248533a04dbfe54f5f69a59fc7d71866df18))

### [9.6.3-rc.3](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.3-rc.2...v9.6.3-rc.3) (2024-12-22)

### Features

-   add priority to downloading files on caching service based on file type ([ea1e860](https://bitbucket.org/leadliaisondev/gocv2/commits/ea1e86007494322f7586b0c017e3a9722ad8ae8b))
-   customize rating icons and count ([68e3643](https://bitbucket.org/leadliaisondev/gocv2/commits/68e364332c088bec92ec9eb283fe7f104573c0e2))

### Bug Fixes

-   accessability clicks on avatar to change profile photo. ([5cde57b](https://bitbucket.org/leadliaisondev/gocv2/commits/5cde57bfda1d9785e8b6ed6bb2166f7ffeb4ff07))
-   add missing icon to activation select component. ([3abf484](https://bitbucket.org/leadliaisondev/gocv2/commits/3abf484f0f66c92bd36c0830046a4a4537b82c8c))
-   retrieve file based on finding in the queue ([6f7d5ac](https://bitbucket.org/leadliaisondev/gocv2/commits/6f7d5ac7e8ee54c056152bc718e7943e5fee9c98))
-   side menu app environment doesn't change when user login and logout in different environments ([efc4483](https://bitbucket.org/leadliaisondev/gocv2/commits/efc448300f54d557fddd289df1c12851b401bf26))

### [9.6.3-rc.2](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.3-rc.1...v9.6.3-rc.2) (2024-12-19)

### Bug Fixes

-   broken UI issue in the user invitation select element on the Admin page. ([21ab159](https://bitbucket.org/leadliaisondev/gocv2/commits/21ab159ed07ef8ec0118f0b6651fd4debf0c978c))
-   ensure select elements display correct value with icon. ([7a10755](https://bitbucket.org/leadliaisondev/gocv2/commits/7a1075591398eea944dc0cca465c90c641375b02))
-   propagation events on orders/analytics cards. ([aab018f](https://bitbucket.org/leadliaisondev/gocv2/commits/aab018f786f8ff95f1b9e6aed544f89ac4c85f82))

### [9.6.3-rc.1](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.2...v9.6.3-rc.1) (2024-12-18)

### Features

-   add process loader for file upload. ([4e612cd](https://bitbucket.org/leadliaisondev/gocv2/commits/4e612cd70fab95f96d1ea7286e8fbaaa9e00392e))
-   add sentry sourcemaps ([b6ed97a](https://bitbucket.org/leadliaisondev/gocv2/commits/b6ed97ad8070f4866b5da7b39fb4d6c4489e07ff))
-   display toast notification after successfully and error updating profile picture. ([b69a6dc](https://bitbucket.org/leadliaisondev/gocv2/commits/b69a6dc68425b8e8e3cd52f6cda1c8a05e360642))
-   upload profile picture using camera or from gallery. ([fcfc286](https://bitbucket.org/leadliaisondev/gocv2/commits/fcfc286a829656e303c3a542655b2d9cb195bc72))

### Bug Fixes

-   align border color for text and textarea inputs. ([f34ad3a](https://bitbucket.org/leadliaisondev/gocv2/commits/f34ad3ada8dbd0a63a05af1f31b4bc3f70a5669d))
-   change the body request in update profile picture API. ([aa495b6](https://bitbucket.org/leadliaisondev/gocv2/commits/aa495b6bc6c1af2230305810cbc2c1b106e860d9))
-   ensure accurate validators for text element max length ([cbf0fa1](https://bitbucket.org/leadliaisondev/gocv2/commits/cbf0fa1ccbaf51b230c4ecd26cb7c6b0d932d59e))
-   ensure correct data is passed to the cropper component for proper functionality. ([dc76a62](https://bitbucket.org/leadliaisondev/gocv2/commits/dc76a62a6b5bc4e7677582321aad4b19a2ff2e84))
-   hide the toaster error message when closing the camera or gallery. ([be5f7df](https://bitbucket.org/leadliaisondev/gocv2/commits/be5f7dff944e45abe21c2933aaa0c800d812beed))
-   modals mode style ([704a724](https://bitbucket.org/leadliaisondev/gocv2/commits/704a7243ee6640fcc07704a90e148579e9e24969))
-   order dropdown, multiselect, rank elements broken ui ([07ce1b9](https://bitbucket.org/leadliaisondev/gocv2/commits/07ce1b908da035b300662710a4b59b34e1fab41a))
-   order rank element color not valid on dark mode. ([3c94ae3](https://bitbucket.org/leadliaisondev/gocv2/commits/3c94ae3b5f2be1b755bc6e1751605d69cb880ecc))
-   rank element styles ([c9eb42f](https://bitbucket.org/leadliaisondev/gocv2/commits/c9eb42f52fe6c6fd23640231a775b1e0911f4880))
-   set "square" as a variant on cropping the profile picture. ([2fc130a](https://bitbucket.org/leadliaisondev/gocv2/commits/2fc130ad7f10b1c7592e799f7917e621b8364d87))
-   split validators on text and textarea elements. ([ac5b901](https://bitbucket.org/leadliaisondev/gocv2/commits/ac5b90105cabfff7cdf7998ef6fb173198a26b4f))
-   text input error not appear on submit ([dde000e](https://bitbucket.org/leadliaisondev/gocv2/commits/dde000e6c0eba46a46793c43ac1fb60195cfc6ef))
-   use GOCCamera and GOCCropper to updating the profile picture. ([c959332](https://bitbucket.org/leadliaisondev/gocv2/commits/c959332bba6c5d9c0870a062ccacd57307abb2e8))
-   validation and UI issues for textarea and text elements ([13ad46f](https://bitbucket.org/leadliaisondev/gocv2/commits/13ad46f3581a48ef4656d85c9b792adab7fbe17c))

### Refactor

-   fastlane ([641e2aa](https://bitbucket.org/leadliaisondev/gocv2/commits/641e2aa1f25873994cd533d401c44d750d61d50f))

### [9.6.1-rc.1](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.0...v9.6.1-rc.1) (2024-12-17)

### Bug Fixes

-   date elements break ui on dark-mode. ([5408577](https://bitbucket.org/leadliaisondev/gocv2/commits/540857739337cf86a8afec48dd62360c3e0d0cc7))
-   null injector for translate pipe in conversation page ([6178b9c](https://bitbucket.org/leadliaisondev/gocv2/commits/6178b9c6b15658252c432f577e42bb375341600d))

### Chore

-   **release:** 9.6.1-rc.1 ([afa2903](https://bitbucket.org/leadliaisondev/gocv2/commits/afa2903e7988b44fce822e11fcb5a984cb82f569))

### [9.6.2](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.0...v9.6.2) (2024-12-17)

### Bug Fixes

-   the app doesn't open on ipad pro ([c2b81df](https://bitbucket.org/leadliaisondev/gocv2/commits/c2b81dfbfa87fff49a849abab4051930d1980bd5))
