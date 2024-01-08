<script context="module">
    // export all HTML elements for markdown.
	export { default as li } from './li.svelte';
	export { default as ul } from './ul.svelte';
	export { default as h1 } from './h/h1.svelte';
	export { default as h2 } from './h/h2.svelte';
	export { default as h3 } from './h/h3.svelte';
	export { default as h4 } from './h/h4.svelte';
	export { default as h5 } from './h/h5.svelte';
	export { default as h6 } from './h/h6.svelte';
    export { default as a } from './a.svelte';
</script>

<slot />