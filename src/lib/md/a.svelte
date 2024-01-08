<script lang=ts>
    export let href: string;
    export let rel: string;
    console.log(href, rel);
</script>

<a {href} {rel}><slot /></a>