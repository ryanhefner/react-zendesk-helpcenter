# 📖 react-zendesk-helpcenter

React library that makes it easy to render Zendesk Help Center content in your React apps.

## Install

Via [npm](https://npmjs.com/package/react-zendesk-helpcenter)

```sh
npm install react-zendesk-helpcenter
```

Via [Yarn](https://yarn.pm/react-zendesk-helpcenter)

```sh
yarn add react-zendesk-helpcenter
```

## How to use

### `Article`

```
import { Article } from 'react-zendesk-helpcenter'

const ArticlePage = ({ articleId }) => {
  return <Article articleId={articleId} domain="[your Zendesk subdomain]" />
}
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
