<script lang="ts">
    let menuOpen = false;

    function closeMenu() {
        menuOpen = false;
    }
</script>

<div class="flex items-center">
    <!-- Hamburger Icon -->
    <button class="md:hidden cursor-pointer text-white focus:outline-none" on:click={() => (menuOpen = !menuOpen)}>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
    </button>


    <!-- Navigation -->
    <nav class={`${
		menuOpen
			? 'flex flex-col bg-black absolute top-16 left-0 w-full p-6 z-50'
			: 'hidden'
	} md:flex gap-6 text-gray-400 items-center`}>
        <a class="hover:text-red-300" href="/pricing">Pricing</a>
        <a class="hover:text-white" href="/services">Services</a>
        <a class="hover:text-white" href="/apps">Apps</a>
        <a class="hover:text-white" href="/contact">Contact</a>
        <div class="flex md:flex-row flex-col gap-6 md:pl-6">
            <a class="hover:text-white" href="/cart">Cart</a>
            <a class="hover:text-white" href="/login">Login</a>
        </div>
    </nav>

    <!-- Overlay -->
    {#if menuOpen}
        <div class="fixed inset-0  z-40" on:click={closeMenu}></div>
    {/if}
</div>
