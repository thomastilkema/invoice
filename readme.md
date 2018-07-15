# Invoice

This is a small React app written in Typescript that renders an invoice in the browser. I use Chrome to create a PDF version (`Print > Save as PDF`).

## Get it running
* `npm start` (it will open your browser on [http://localhost:9000](http://localhost:9000))
* edit the contents within the [`src/config`](src/config) folder to update invoice data

## Example
[`docs/invoice-example.pdf`](https://github.com/thomastilkema/invoice/raw/master/docs/invoice-example.pdf)

## Style and logo
* The global css used, can be found in [`src/style`](src/style)
* Some components have additional styles defined, like [`src/component/page/style.css`](src/component/page/style.css)
* The logo is located at [`src/img/logo.png`](src/img/logo.png)

## Tools
This application makes use of:
* React
* Typescript
* Moment
* Jest, to unit test utility functions ([`scr/utility`](src/utility))
* Enzyme & Jest, to unit test React components ([`scr/component`](src/component))
* Webpack

## Don't store everything in version control
I'd rather not store information about my company or the address/contact information of others in Git. Especially not in public repositories. Therefore, after having installed the npm modules of this project, [`script/git-ignore-changes.sh`](script/git-ignore-changes.sh) will be executed. It will result in ignoring changes in [`src/config/sender.ts`](src/config/sender.ts) and [`src/config/receiver.ts`](src/config/receiver.ts).

Read more about letting Git ignore changes in [this post on Medium](https://medium.com/@igloude/git-skip-worktree-and-how-i-used-to-hate-config-files-e84a44a8c859)

## Notes
* The invoice contents are in Dutch. Because, well, I'm Dutch :)
* I've optimized the css to work in my default browser: Chrome. Firefox displays it less nicely (when saving to PDF), I've noticed. And since the css uses native css variables, it will probably look terrible in Explorer <= 11.
