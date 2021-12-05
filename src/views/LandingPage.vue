<template>


  <div class="container">
    <div class="clamped">

    <div class="row">
      <div class="span4">
        <img class="center-block" src="../assets/photo-1585156569731-4c5b959234f7.jpg" />
      </div>
    </div>

      <h2 class="font-weight-regular">Where BYU Students Look First.</h2>

      <p class="my-2">
        Lost something? Post it
        <em><router-link to="/dashboard" style="text-decoration: inherit">
          here
        </router-link></em>
      </p>

      <p class="my-2">
        Looking for something? Click
        <em><router-link to="/found" style="text-decoration:inherit">
          here
        </router-link></em>
      </p>

      <h3>Why Did We Make this Website?</h3>

      <p>Ever since we were kids, we have been known to consistantly lose just about anything
        we had in our possesion. We would lose anything from our car keys to our brand new pair of shoes!
          I decided it was time for the schenanegans to be over, so we (Zack and Dylan) created this 
          website. Here, if you lose anything on or off campus (in the general vicinity of BYU), we 
          want people to post what was lost or found here! That way there is one source to come to for 
          any lost (or found) Items in the area. If you would like to learn more, are looking for something, 
          or have found something, you have come to the right place! Use our Menu to navigate our website! Post, 
          view, and follow up on any lost items in the area!
      </p>


    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",

  components: {},
};
</script>

<style scoped>
  .center-block {
    padding-top: 20px;
    justify-content: center;
    width: 100%;
    size-adjust: 100%;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
  }

  h2 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  h3 {
    padding-top: 30px;
    padding-bottom: 10px;
  }
</style>
