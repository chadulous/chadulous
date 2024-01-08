<script lang=ts>
    export let href: string;
    export let rel: HTMLLinkElement["rel"];
</script>

<a class="font-bold underline" {href} {rel}><slot /></a>