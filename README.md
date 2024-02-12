# sv-popup

A simple popup/modal for svelte/sveltekit apps.

## Features

- easy to use components
- click outside or escape to close modal
- uses portal

## Installation

```
npm i -D sv-popup
```

## Usage

```svelte
<script>
  import { Modal, Content, Trigger } from "sv-popup"
</script>

<Modal>
  <Content>
    <h1>Hello</h1>
  </Content>
  <Trigger>
    <button>Open Modal</button>
  </Trigger>
</Modal>

<Modal basic>
  <Content>
    <h1>Hello 2</h1>
  </Content>
  <Trigger>
    <button>Open Modal 2</button>
  </Trigger>
</Modal>
```

[Demo](https://sv-popup.sveltethemes.dev/)
