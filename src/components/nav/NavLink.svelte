<script>
    let { href, children } = $props();
</script>

<a class="hover:text-white
        my-1
        px-2 rounded"
    href={href}
>
    {@render children?.()}
</a>