# sv-popup

A simple popup/modal for svelte/sveltekit apps.

## Installation

`npm i -D sv-popup`

## Usage

```svelte
<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

<Modal>
  <Content>
    <h1>Hello</h1>
  </Content>
  <Trigger>
    <button>Open Modal</button>
  </Trigger>
</Modal>

<Modal>
  <Content>
    <h1>Hello 2</h1>
  </Content>
  <Trigger>
    <button>Open Modal 2</button>
  </Trigger>
</Modal>
```

## Dependencies

- depends on **svelte@3.47.0**
- update svelte to `3.47` or higher in package.json
- run `npm install`
