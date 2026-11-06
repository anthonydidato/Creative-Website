import {defineConfig} from 'vite';
export default defineConfig({base:'/Creative-Website/studio/',build:{target:'es2022',chunkSizeWarningLimit:1200,rollupOptions:{input:{studio:'index.html',viewer:'viewer.html'}}}});
