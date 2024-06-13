<script>
  import Modal from "$lib/Modal.svelte";
  import Trigger from "$lib/Trigger.svelte";
  import Content from "$lib/Content.svelte";
</script>

## Video fullscreen layout without close button

<Modal fullscreen button={false}>
  <Content>
    <iframe
      src="https://www.youtube.com/embed/7xDcmL5-ET8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Content>
  <Trigger>
    <button class="btn">Open video + fullscreen layout</button>
  </Trigger>
</Modal>
<br />
<br />

```svelte
<Modal fullscreen button={false}>
  <Content>
    <iframe
      src="https://www.youtube.com/embed/7xDcmL5-ET8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Content>
  <Trigger>
    <button class="btn">Open video + fullscreen layout</button>
  </Trigger>
</Modal>

<!-- required styles -->
<style>
  iframe {
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
}
</style>
```
