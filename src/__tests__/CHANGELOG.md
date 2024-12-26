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
