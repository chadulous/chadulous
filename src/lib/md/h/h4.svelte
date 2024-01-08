<script>
	import values from "./values";
    const z = values(4);
</script>

<style>
    span {
        display: block;
        font-size: var(--h-size);
        margin-top: var(--h-margin);
        margin-bottom: var(--h-margin);
        font-weight: bold;
    }
</style>

<span class="font-bold" style="--h-size: {z[0]}em; --h-margin: {z[1]}em;">
    <slot />
</span>