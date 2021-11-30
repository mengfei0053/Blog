---
slug: from-shrinkwrap-to-pkg-lock
title: 从npm-shrinkwrap 到 package-lock
authors: [meng]
tags: [npm]
---


# 从npm-shrinkwrap 到 package-lock

## 关于 shrinkwrap 的更新

### [v1.3.16~v2.15.2](https://github.com/npm/cli/blob/v2.15.12/CHANGELOG.md) 
- v1.3.16 (2013-12-11):
    - Stopped re-downloading URL and shrinkwrap dependencies, as demonstrated in #3463 (644c2ff, @spmason). You can use the --force option to force re-download and installation of all dependencies.
- v1.4.1 (2014-02-13):
    - Fix npm shrinkwrap forgetting to shrinkwrap dependencies that were also development dependencies
- v1.4.3 (2014-02-16):
    - Make npm shrinkwrap output dependencies in a sorted order, so that diffs between shrinkwrap files should be saner now. (059b2bf, @Raynos)
- v1.4.7 (2014-04-15):
    - Fix npm crashing when doing npm shrinkwrap in the presence of a package.json with no dependencies. (a9d9fa5, @kislyuk)
- v2.1.8 (2014-11-06):
    - 063d843 npm version now updates version in npm-shrinkwrap.json (@faiq)
    - 3f53cd7 #6559 save local dependencies in npm-shrinkwrap.json (@Torsph)
- v2.1.13 (2014-12-11):
    - cb6ff8d #6879 npm version: Update shrinkwrap post-check. (@othiym23)
- v2.1.17 (2014-12-25):
    - 6b7c5ec #7011 Send auth for tarball fetches for packages in npm-shrinkwrap.json from private registries. (@othiym23)
- v2.7.1 (2015-03-05):
    - 6823807 #7121 npm install --save for Git dependencies saves the URL passed in, instead of the temporary directory used to clone the remote repo. Fixes using Git dependencies when shrinkwrapping. In the process, rewrote the Git dependency caching code. Again. No more single-letter variable names, and a much clearer workflow. (@othiym23)
- v2.7.3 (2015-03-16):
    - 1549106 #7641 Due to 448efd0, running npm shrinkwrap --dev caused production dependencies to no longer be included in npm-shrinkwrap.json. Whoopsie! (@othiym23)
- v2.8.3 (2015-04-15):
    - 387f889 #7961 Ensure that hosted git SSH URLs always have a valid protocol when stored in resolved fields in npm-shrinkwrap.json. (@othiym23)
- v2.9.1 (2015-04-30):
    - b574076 #8079 Make the npm shrinkwrap documentation use code formatting for examples consistently. It would be great to do this for more commands HINT HINT. (@RichardLitt)
- v2.11.0 (2015-05-21):
    - f87cde5 #8292 Fix typo in an example and grammar in the description in the shrinkwrap documentation. (@vshih)
    - d3526ce Improve the formatting in the shrinkwrap documentation. (@othiym23)

### [v3.0.0~v3.10.10](https://github.com/npm/cli/blob/v3.10.10/CHANGELOG.md)
- v3.0.0 (2015-06-25):
    - Install: it works different!
        - #6928 (#2931 #2950) npm install when you have an npm-shrinkwrap.json will ensure you have the modules specified in it are installed in exactly the shape specified no matter what you had when you started.
        - #6913 (#1341 #3124 #4956 #6349 #5465) npm install when some of your dependencies are missing sub-dependencies will result in those sub-dependencies being installed. That is, npm install now knows how to fix broken installs, most of the time.
        - #5465 If you directly npm install a module that's already a subdep of something else and your new version is incompatible, it will now install the previous version nested in the things that need it.
        - a2b50cf #5693 When installing a new module, if it's mentioned in your npm-shrinkwrap.json or your package.json use the version specifier from there if you didn't specify one yourself.
    - Shrinkwraps: they are a-changin'!
        - First of all, they should be idempotent now (#5779). No more differences because the first time you install (without npm-shrinkwrap.json) and the second time (with npm-shrinkwrap.json).
        - #6781 Second, if you save your changes to package.json and you have npm-shrinkwrap.json, then it will be updated as well. This applies to all of the commands that update your tree:
            - npm install --save
            - npm update --save
            - npm dedupe --save (#6410)
            - npm uninstall --save
        - #4944 (#5161 #5448) Third, because node_modules folders are now deduped and flat, shrinkwrap has to also be smart enough to handle this.
        - And finally, enjoy this shrinkwrap bug fix:
            - #3675 When shrinkwrapping a dependency that's both a devDependency and the child of a regular dependency, npm now correctly includes the child.
- v3.1.0 (2015-07-02):
- 57c3cea #8695 Remote packages with shrinkwraps made npm cause node + iojs to explode and catch fire. NO MORE. (@iarna)
- v3.3.0 (2015-08-13):
    - As shrinkwraps don't include dev deps by default. This replaces passing in --dev in that scenario.
- v3.3.7 (2015-10-08):
    - 87336c3 #9879 npm@3's shrinkwrap was refusing to shrinkwrap if an optional dependency was missing– patch it to allow this. (@mantoni)
- v3.3.10 (2015-10-22):
    - SHRINKWRAP + DEV DEPS NOW RESPECTED
    - eb28a8c #9647 If a shrinkwrap already has dev deps, don't throw them away when someone later runs npm install --save. (@iarna)
- v3.3.11 (2015-10-29):
    - PARTIAL SHRINKWRAPS, NO LONGER A BAD DAY
    - We're ignoring the version check on things specified in the shrinkwrap so that you can override the version that will be installed. This is because you may want to use a different version than is specified by your dependencies' dependencies' package.json files.
- v3.7.3 (2016-02-11):
    - 42a4727 #11391 Fixed versions of shrinkwrap.json in examples in documentation for npm shrinkwrap, which did not quite match up. (@xcatliu)
- v3.8.9 (2016-04-28)：
    - 60da618 #12347 Fix a bug that could result in shrinkwraps missing the resolved field, which is necessary in producing a fully reproducible build. (@sminnee)
- v3.9.1 (2016-05-12)：
    - b894413 #12372 Changing a nested dependency in an npm-shrinkwrap.json and then running npm install would not get up the updated package. This corrects that. (@misterbyrne)
- v3.9.2 (2016-05-17):
    - This is a quick patch release. The previous release, 3.9.1, introduced a bug where npm would crash given a combination of specific package tree on disk and a shrinkwrap.
    - cde367f #12724 Fix crasher when inflating shrinkwraps with packages on disk that were installed by older npm versions. (@iarna)
- v3.10.0 (2016-06-16):
    - NEW LIFECYCLE SCRIPT: shrinkwrap
    - e8c80f2 #10744 You can now add preshrinkwrap, shrinkwrap and postshrinkwrap to your package.json scripts section. They are run when you run npm shrinkwrap or npm install --save with an npm-shrinkwrap.json present in your module directory.
    - preshrinkwrap and shrinkwrap is run prior to generating the new npm-shrinkwrap.json and postshrinkwrap is run after. (@SimenB)
- v3.10.4 (2016-06-30):
    - SHRINKWRAP IS COMPLICATED BUT IT'S BETTER NOW
    - @iarna did some heroic hacking to refactor a bunch of shrinkwrap-related bits and fixed some resolution and pathing issues that were biting users. The code around that stuff got more readable/maintainable in the process, too!
    - 346bba1 #13214 Resolve local dependencies in npm-shrinkwrap.json relative to the top of the tree. (@iarna)
    - 4a67fdb #13213 If you run npm install modulename it should, if a npm-shrinkwrap.json is present, use the version found there. If not, it'll use the version found in your package.json, and failing that, use latest. This fixes a case where the first check was being bypassed because version resolution was being done prior to loading the shrinkwrap, and so checks to match the shrinkwrap version couldn't succeed. (@iarna)
    - afa2133 #13214 Refactor shrinkwrap specifier lookup into shared function. (@iarna)
    - 2820b56 #13214 Refactor operations in inflate-shrinkwrap.js into separate functions for added clarity. (@iarna)
    - ee5bfb3 Fix Windows path issue in a shrinkwrap test. (@zkat)
- v3.10.6 (2016-07-07):
    - This week we have a bunch of bug fixes for ya! A shrinkwrap regression introduced in 3.10.0, better lifecycle PATH behavior, improvements when working with registries other than registry.npmjs.org and a fix for hopefully the last don't print a progress bar over my interactive thingy bug.
    - SHRINKWRAP AND DEV DEPENDENCIES
    - The rewrite in 3.10.0 triggered a bug where dependencies of devDependencies would be included in your shrinkwrap even if you didn't request devDependencies.
    - 2484529 #13308 Fix bug where deps of devDependencies would be incorrectly included in shrinkwraps. (@iarna)
- v3.10.7 (2016-08-11):
    - BETTER SHRINKWRAP WITH GIT DEPENDENCIES
        - 0f7e319 #12718 Update outdated git dependencies found in shrinkwraps. Previously, if the module version was the same then no update would be completed even if the committish had changed. (@kossnocorp)
- v3.10.8 (2016-09-08):
    - SHRINKWRAP LEVEL UP
    - The most notable part of this release is a series of commits meant to make npm shrinkwrap more consistent. By itself, shrinkwrap seems like a fairly straightforward thing to implement, but things get complicated when it starts interacting with devDependencies, optionalDependencies, and bundledDependencies. These commits address some corner cases related to these.
        - a7eca32 #10073 Record if a dependency is only used as a devDependency and exclude it from the shrinkwrap file. (@bengl)
        - 1eabcd1 #10073 Record if a dependency is optional to shrinkwrap. (@bengl)
        - 03efc89 #13692 We were doing a weird thing where we used a package.json field installable to check to see if we'd checked for platform compatibility, and if not did so. But this was the only place that was ever done so there was no reason to implement it in such an obfuscated manner. Instead it now just directly checks and then records that its done so on the node object with knownInstallable. This is useful to know because modules expanded via shrinkwrap don't go through this– inflateShrinkwrap does not currently have any rollback semantics and so checking this sort of thing there is unhelpful. (@iarna)
        - ff87938 #11735 Running npm install --save-dev will now update shrinkwrap file, but only if there already are devDependencies in it. (@szimek)
        - c00ca3a #13394 Check installability of modules from shrinkwrap, since modules that came into the tree vie shrinkwrap won't already have this information recorded in advance. (@iarna)
- v3.10.9 (2016-10-06):
    - LIFECYCLE FIXES
        - d388f90 #13942 Fix current working directory while running shrinkwrap lifecycle scripts. Previously if you ran a shrinkwrap from another lifecycle script AND node_modules existed (and if you're running npm shrinkwrap it probably should) then npm would run the shrinkwrap lifecycle from the node_modules folder instead of the package folder. (@evocateur) (@iarna)
        - c3b6cdf #13964 Fix bug where the uninstall lifecycles weren't being run when you reinstalled/updated an existing module. (@iarna)
        - 72bb89c #13344 When running lifecycles use TMPDIR if it's writable and fall back to the current working directory if not. Previously we just assumed TMPDIR wouldn't be writable (as we might have been running as nobody and nobody on some systems can't write to TMPDIR). (@aaronjensen)
    - SHRINKWRAP GIT & TAGGED DEPENDENCY FIX
        - 3b5eee0 #13941 Fix git and tagged dependency matching with shrinkwraps. Previously git and tag (ie foo@latest) dependencies installed from a shrinkwrap would always be flagged as invalid. (@iarna)
- v3.10.10 (2016-11-04):
    - See the discussion on #14042 for more context on this release, which is intended to address a serious regression in shrinkwrap behavior in the version of the CLI currently bundled with Node.js 6 LTS "Boron". You should never install this version directly; instead update to npm@4, which has everything in this release and more.
    - REGRESSION FIX
        - 9aebe98 #14117 Fixes a bug where installing a shrinkwrapped package would fail if the platform failed to install an optional dependency included in the shrinkwrap. (@watilde)

### [v4.0.0~v4.6.1](https://github.com/npm/cli/blob/v4.6.1/CHANGELOG.md)
- v4.0.0 (2016-10-20):
    - Partial shrinkwraps are no longer supported. npm-shrinkwrap.json is considered a complete installation manifest except for devDependencies.
    - BUGFIXES
        - bc84012 #14117 Fixes a bug where installing a shrinkwrapped package would fail if the platform failed to install an optional dependency included in the shrinkwrap. (@watilde)
    - NO MORE PARTIAL SHRINKWRAPS (BREAKING)
        - That's right. No more partial shrinkwraps. That means that if you have an npm-shrinkwrap.json in your project, npm will no longer install anything that isn't explicitly listed there, unless it's a devDependency. This will open doors to some nice optimizations and make use of npm shrinkwrap just generally smoother by removing some awful corner cases. We will also skip devDependency installation from package.json if you added devDependencies to your shrinkwrap by using npm shrinkwrap --dev.
        - b7dfae8 #14327 Use readShrinkwrap to read top level shrinkwrap. There's no reason for npm to be doing its own bespoke heirloom-grade artisanal thing here. (@iarna)
        - 0ae1f4b 4a54997 f22a1ae 3f61189 #14327 Treat shrinkwrap as canonical. That is, don't try to fill in for partial shrinkwraps. Partial shrinkwraps should produce partial installs. If your shrinkwrap contains NO devDependencies then we'll still try to install them from your package.json instead of assuming you NEVER want devDependencies. (@iarna)
- v4.0.2 (2016-11-03):
    - SMALLER CHANGES
        - 7f41295 #14519 Document that as of npm@4.0.1, npm shrinkwrap now includes devDependencies unless instructed otherwise. (@iarna)
- v4.5.0 (2017-03-24):
    - NO SHRINKWRAP, NO PROBLEM
        - Previously we needed to extract every package's tarball to look for an npm-shrinkwrap.json before we could begin working through what its dependencies were. This was one of the things stopping npm's network accesses from happening more concurrently. The new filtered package metadata provides a new key, _hasShrinkwrap. When that's set to false then we know we don't have to look for one.
    - 4f5060eb3 #15969 Add support for skipping npm-shrinkwrap.json extraction when the registry can affirm that one doesn't exist. (@iarna)

### [v5.0.0~v5.10.0](https://github.com/npm/cli/blob/v5.10.0/CHANGELOG.md) (开始引入 package-lock.json)
- v5.0.0 (2017-05-25):
    - npm will --save by default now. Additionally, package-lock.json will be automatically created unless an npm-shrinkwrap.json exists. (#15666)
    - package locks no longer exclude optionalDependencies that failed to build. This means package-lock.json and npm-shrinkwrap.json should now be cross-platform. (#15900)
    - Shrinkwrap and package-lock no longer warn and exit without saving the lockfile.
    - A new, standardised lockfile feature meant for cross-package-manager compatibility (package-lock.json), and a new format and semantics for shrinkwrap. (#16441)
    - --save is no longer necessary. All installs will be saved by default. You can prevent saving with --no-save. Installing optional and dev deps is unchanged: use -D/--save-dev and -O/--save-optional if you want them saved into those fields instead. Note that since npm@3, npm will automatically update npm-shrinkwrap.json when you save: this will also be true for package-lock.json. (#15666)
    - Indentation is now detected and preserved for package.json, package-lock.json, and npm-shrinkwrap.json. If the package lock is missing, it will default to package.json's current indentation.
- v5.0.4 (2017-06-13):
    - 800cb2b4e #17076 Use legacy from field to improve upgrade experience from legacy shrinkwraps and installs. (@zkat)
- v5.1.0 (2017-07-05):
    - 4f45ba222 a48958598 901bef0e1 #17508 Add a new requires field to package-lock.json with information about the logical dependency tree. This includes references to the specific version each package is intended to see, and can be used for many things, such as converting package-lock.json to other lockfile formats, various optimizations, and verifying correctness of a package tree. (@iarna)
    - 3b4681b53 #17508 Stop calling addBundle on locked deps, speeding up the package-lock.json-based fast path. (@iarna)
    - It introduces a new package-lock.json field, called requires, which tracks which modules a given module requires.
    - It fixes #16866, allowing the package.json to trump the package-lock.json.
    - 47e8fc8eb #17508 Make npm ls take package locks (and shrinkwraps) into account. This means npm ls can now be used to see which dependencies are missing, so long as a package lock has been previously generated with it in. (@iarna)
    - 99ef3b52c #17505 Stop trying to commit updated npm-shrinkwrap.json and package-lock.json if they're .gitignored. (@zkat)
- v5.2.0 (2017-07-05): （开始加入npx）
    - c0a289b1b #17606 Make sure that when write package.json and package-lock.json we always use unix path separators. (@Standard8)
- v5.4.0 (2017-08-22):
    - b6d5549d2 #17844 Make package-lock.json sorting locale-agnostic. Previously, sorting would vary by locale, due to using localeCompare for key sorting. This'll give you a little package-lock.json churn as it reshuffles things, sorry! (@LotharSee)
- v5.6.0 (2017-11-27):
    - bc263c3fd #19054 Fully cross-platform package-lock.json. Installing a failing optional dependency on one platform no longer removes it from the dependency tree, meaning that package-lock.json should now be generated consistently across platforms! 🎉 (@iarna)
    - f94fcbc50 #19160 Add --package-lock-only config option. This makes it so you can generate a target package-lock.json without performing a full install of node_modules. (@alopezsanchez)
    - a93e0a51d #18846 Correctly save transitive dependencies when using npm update in package-lock.json. (@iarna)
- v5.7.0 (2018-02-20):
    - Allow npm install to fix package-lock.json and npm-shrinkwrap.json files that have merge conflicts in them without your having to edit them. It works in conjunction with npm-merge-driver to entirely eliminate package-lock merge conflicts.
    - e27674c22 Automatically resolve merge conflicts in lock-files. (@zkat)
- v5.8.0 (2018-03-08):
    - 2f513fe1c #19904 Make a best-attempt at preserving line ending style when saving package.json/package-lock.json/npm-shrinkwrap.json. This goes hand-in-hand with a previous patch to preserve detected indentation style. (@tuananh)
    - d3cfd41a2 pacote@7.6.1 (@zkat)
        - Enable file:-based resolved URIs in package-lock.json.
        - Retry git-based operations on certain types of failure.
    - fc8761daf #19629 Give more detailed, contextual information when npm fails to parse package-lock.json and npm-shrinkwrap.json, instead of saying JSON parse error and leaving you out in the cold. (@JoshuaKGoldberg)
- v5.9.0 (2018-03-23):
    - If you resolve a package-lock.json merge conflict with npm install we now suggest you setup a merge driver to handle these automatically for you. If you're reading this and you'd like to set it up now, run:
    - npx npm-merge-driver install -g
    - 5ebe99719 #20071 suggest installing the merge driver (@zkat)
- v5.10.0-next.0 (2018-04-12):
    - f18be9b39 #20154 Let version succeed when package-lock.json is gitignored. (@nwoltman)
    - 8e21b19a8 #20140 Note in documentation that package-lock.json version gets touched by npm version. (@srl295)
- v5.10.0-next.1 (2018-05-07):
    - SHRONKWRAPS AND LACKFILES
    - If a published modules had legacy npm-shrinkwrap.json we were saving ordinary registry dependencies (name@version) to your package-lock.json as https:// URLs instead of versions.
        - 36f998411 When saving the lock-file compute how the dependency is being required instead of using _resolved in the package.json. This fixes the bug that was converting registry dependencies into https:// dependencies. (@iarna)
        - 113e1a3af When encountering a https:// URL in our lockfiles that point at our default registry, extract the version and use them as registry dependencies. This lets us heal package-lock.json files produced by 6.0.0 (@iarna)
    - MORE package-lock.json FORMAT CHANGES?!
        - 074502916 #20384 Add from field back into package-lock for git dependencies. This will give npm the information it needs to figure out whether git deps are valid, specially when running with legacy install metadata or in --package-lock-only mode when there's no node_modules. This should help remove a significant amount of git-related churn on the lock-file. (@zkat)
    - 1b535cb9d #20358 npm install-test (aka npm it) will no longer generate package-lock.json when running with --no-package-lock or package-lock=false. (@raymondfeng)
    - 268f7ac50 5f84ebdb6 c12e61431 #20390 Fix a scenario where a git dependency had a comittish associated with it that was not a complete commitid. npm would never consider that entry in the package.json as matching the entry in the package-lock.json and this resulted in inappropriate pruning or reinstallation of git dependencies. This has been addressed in two ways, first, the addition of the from field as described in #20384 means we can exactly match the package.json. Second, when that's missing (when working with older package-lock.json files), we assume that the match is ok. (If it's not, we'll fix it up when a real installation is done.) (@iarna)

### [v6.0.0-0~v6.14.15](https://github.com/npm/cli/blob/v5.10.0/CHANGELOG.md) 