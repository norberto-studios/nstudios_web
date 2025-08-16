<script lang="ts">
    import NavLink from "./NavLink.svelte";

    let menuOpen = false;

    function closeMenu() {
        menuOpen = false;
    }
</script>

<div class="flex items-center">
    <!-- Hamburger Icon -->
    <button aria-label="hamburger-icon-btn"
            class="md:hidden cursor-pointer text-white focus:outline-none" onclick={() => (menuOpen = !menuOpen)}>
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
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
        <NavLink href="/apps">Apps</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <div class="flex md:flex-row flex-col md:pl-6">
            <NavLink href="/cart">Cart</NavLink>
            <NavLink href="/login">Login</NavLink>
        </div>
    </nav>

    <!-- Overlay -->
    {#if menuOpen}
        <div role="button"
             tabindex="-1"
                onkeydown={(e) => e.key === 'Escape' && closeMenu()}
                class="fixed inset-0  z-40" onclick={closeMenu}>
        </div>
    {/if}
</div>
