
import type vuetify from '~/plugins/vuetify';
<template>
    <v-app-bar color="primary" app class="overflow-visible">
        <v-app-bar-title @click="$router.push('/')">
            <span>Bleizhmor</span>
        </v-app-bar-title>

        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-if="drawerVersion"></v-app-bar-nav-icon>

        <template v-else>

            <template v-for="(item, index) in menu" :key="index">

                <v-hover v-if="item.childrens">
                    <template v-slot:default="{ isHovering, props }">
                        <div v-bind="props" class="nav-menu-container">
                            <v-btn append-icon="mdi-chevron-down" variant="plain" :to="item.link"
                                :class="{ 'active': isActive(item.link) }">
                                {{ item.name }}
                            </v-btn>
                            <v-card v-if="isHovering" class="nav-menu rounded-0">
                                <v-list class="bg-primary-lighten-1 pa-2">
                                    <NuxtLink v-for="(subItem, subIndex) in item.childrens" :key="subIndex"
                                        :to="item.link + subItem.link">
                                        <v-list-item :title="subItem.name"></v-list-item>
                                    </NuxtLink>
                                </v-list>
                            </v-card>
                        </div>
                    </template>
                </v-hover>

                <v-btn v-else :to="item.link" variant="plain">{{ item.name }}</v-btn>

            </template>

        </template>
    </v-app-bar>

    <v-navigation-drawer color="primary-lighten-1" v-model="drawer" location="right" v-if="drawerVersion">
        <v-list>
            <template v-for="(item, index) in menu" :key="index">
                <v-list-group v-if="item.childrens">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" link>
                            <router-link :to="item.link" :class="{ 'active': isActive(item.link) }">{{ item.name
                            }}</router-link>
                        </v-list-item>
                    </template>
                    <NuxtLink v-for="(subItem, subIndex) in item.childrens" :key="subIndex" :to="item.link + subItem.link">
                        <v-list-item link :title="subItem.name"></v-list-item>
                    </NuxtLink>
                </v-list-group>


                <NuxtLink :to="item.link" v-else>
                    <v-list-item link :title="item.name"></v-list-item>
                </NuxtLink>

            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { name: "Histoire", link: "/histoire" },
                { name: "Sturiez", link: "/sturiez" },
                {
                    name: "Activités", link: "/activites", childrens: [
                        { name: "Activités des troupes", link: "/activites-troupes" },
                        { name: "WE de formation", link: "/we-formation" },
                        { name: "Activités inter-troupes", link: "/activites-inter-troupes" }
                    ]
                },
                {
                    name: "Coin technique", link: "/coin-technique", childrens: [
                        { name: "Langue bretonne", link: "/langue-bretonne" },
                        { name: "Danses bretonnes", link: "/danses-bretonnes" }
                    ]
                },
                {
                    name: "Contact", link: "/contact", childrens: [
                        { name: "Nous contacter", link: "/contact" },
                        { name: "Faire un don", link: "/don" },
                        { name: "Inscription", link: "/inscription" }
                    ]
                },
                { name: "Forum", link: "/forum" },
            ],
            drawer: false,
        }
    },
    computed: {
        drawerVersion() {
            return this.$vuetify.display.smAndDown;
        },
        isActive() {
            return (link) => {
                return this.$route.path.includes(link);
            }
        }
    }
}
</script>

<style scoped>
.v-navigation-drawer {
    z-index: 1006!important;
}

.v-app-bar-title {
    cursor: pointer;
}

.nav-menu {
    position: absolute;
}

a {
    color: white;
    text-decoration: none;
}

.v-btn {
    opacity: 100%;
}

.v-btn--active,
.active,
.router-link-active {
    color: rgb(var(--v-theme-secondary));

}

.v-btn:hover,
a:hover {
    color: rgb(var(--v-theme-secondary-lighten-1));
}
</style>