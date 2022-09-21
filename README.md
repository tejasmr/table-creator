# table-creator

> Create tables in react easily

[![NPM](https://img.shields.io/npm/v/table-creator.svg)](https://www.npmjs.com/package/table-creator) 
[![NPM](https://img.shields.io/npm/dt/table-creator.svg)](https://www.npmjs.com/package/table-creator) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save table-creator
```

[![NPM](https://nodei.co/npm/table-creator.png)](https://npmjs.org/package/table-creator)

## Usage

```tsx
import React, { Component } from 'react'

import TableCreator from 'table-creator'
import 'table-creator/dist/index.css'

class Example extends Component {
  render() {
    return <TableCreator headers={["Header1", "Header2"]} data={[{"Header1":"Data11", "Header2":"Data12"}, {"Header1":"Data21", "Header2":"Data22"}]}/>
  }
}
```

## License

MIT © [tezz-io](https://github.com/tezz-io)
