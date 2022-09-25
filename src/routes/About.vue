<template>
    <div class="row">

      <div class="col-6">
          <div class="row row-fill">
              <div class="card">
                  <img src="../assets/img/icon.png">
                  <div class="card-head card-head-bordered">depicted: {{names[name]}}</div>
                  <div class="card-body">
                      troublemaker indiet. i turn bad ideas into audacious video games
                  </div>
              </div>
          </div>
      </div>

      <div class="col-6">
          <card header="about tuckie">
              <p>
                  hihi, im a game designer, pixel artist, and web developer from the pacific 
                  northwest. generally i come up with silly ideas and if they 
                  make me laugh enough i expand them into subversive, abrasive, and playful projects.
              </p>
              <p>
                  stuff ive worked on has been mentioned on rock paper shotgun which is kinda cool.
                  ive also been selected for game showcases at emerald city comiccon, xoxofest, and
                  plenty of portland's pigsquad events~~
              </p>
              <p>
                
              </p>
              
          </card>

          <card header="how it works"> 
              <img src="../assets/img/process.png" alt="scheme">
          </card>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: 0,
      names: ['tuckie', 'twuky', 'twky', 'tukcey', 'tucky', 'wtiky', '???']
    }
  },
  mounted() {
        window.setInterval(() => {
            // cycle through names
            this.name++
            this.name = this.name % this.names.length
        }, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
