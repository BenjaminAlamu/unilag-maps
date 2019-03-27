<template>
    <Page>
        <ActionBar class="action-bar" title="Map"></ActionBar>
        <GridLayout>
            <Mapbox
                    accessToken="sk.eyJ1IjoiaWZlbm5hIiwiYSI6ImNqdHJ0bGd3czByYzIzeXIwaGc4YnJkY2QifQ.OA65PJhnfB8eFnx879VZhA"
                    mapStyle="traffic_day"
                    latitude="50.467735"
                    longitude="13.427718"
                    hideCompass="true"
                    zoomLevel="18"
                    showUserLocation="false"
                    disableZoom="false"
                    disableRotation="false"
                    disableScroll="false"
                    disableTilt="false">
            </Mapbox>
        </GridLayout>
    </Page>
</template>

<script >
  export default {
    data() {
      return {}
    },
      methods: {
          onMapReady() {
              //
          }
      }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
