# Steps to publish a new version

* do changes
* update package.json version {tag_version}
* npm install
* commit
* push
* git tag {tag_version}
* git push origin main --tags
* npm run-script build
* npm publish