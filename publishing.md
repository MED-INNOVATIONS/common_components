# Steps to publish a new version

* do changes
* npm install
* update package.json version {tag_version}
* commit
* git tag {tag_version}
* git push origin master --tags
* npm run-script build
* npm publish