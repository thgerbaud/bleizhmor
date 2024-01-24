<template>
    <v-app>
        <NavBar />
        <v-main class="ma-8">
            <slot />
        </v-main>
    </v-app>
</template>

<style>
div.v-application__wrap {
    /* avoid overflow due to v-app-bar */
    min-height: unset !important;
    height: 100vh !important;
}
</style>