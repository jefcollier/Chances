<template>
    <div class="container">

        <Header />
        
        <div id="newProblem">

            <form>
                
                <h1 class="title">Let's get started</h1>

                <div v-if="step === 1">
                    <h2 class="subtitle">
                        <strong class="stepNum" title="Step One">1</strong>
                        what are the <span class="brand">chances</span> of 
                        <b-button v-b-modal.prob-title v-bind:class="{'configure-option':true, 'new':(newProblem.name != 'something')}">{{newProblem.name}}</b-button>?
                    </h2>                  
                    <b-modal id="prob-title" title="New Problem Wizard">
                        <p>Give your problem a name.  You can always change it later.</p>
                        <input id="name" name="name" v-model="newProblem.name">
                    </b-modal>
                    <button @click.prevent="next()">Next</button>
                </div>

                <div v-if="step === 2">
                    <h2 class="subtitle">
                        <strong class="stepNum" title="Step Two">2</strong>
                        <div v-if="newProblem.sampleSet == 'sample set'">
                            let's define the <b-button v-b-modal.prob-title v-bind:class="{'configure-option':true, 'new':(newProblem.sampleSet != 'sample set')}">{{newProblem.sampleSet}}</b-button>
                        </div>
                        <div v-else>
                            Your set is <span class="brand">{{newProblem.sampleSet}}</span>
                        </div>
                    </h2>
                    <b-modal id="prob-title" title="New Problem Wizard">
                        <p>Pick from one of our pre-made samples or define your own custom set.</p>
                        <input id="name" name="name" v-model="newProblem.sampleSet">
                    </b-modal>
                    <button @click.prevent="prev()">Previous</button>
                    <button @click.prevent="next()">Next</button>
                </div>

                <div v-if="step === 3">
                    <h1>Step Three</h1>
                    <p>
                        <legend for="numtickets">Number of Tickets:</legend>
                        <input id="numtickets" name="numtickets" type="number" v-model="newProblem.numtickets">
                    </p>
                    <p>
                        <legend for="shirtsize">Shirt Size:</legend>
                        <select id="shirtsize" name="shirtsize" v-model="newProblem.shirtsize">
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">X-Large</option>
                        </select>
                    </p>
                    <button @click.prevent="prev()">Previous</button>
                    <button @click.prevent="submit()">Save</button>
                </div>
            </form>

            <br/><br/>Debug: {{newProblem}}
        </div>
        
        <Footer />

    </div>
</template>        

<script>
import Header from '~/components/Header.vue';
import Logo from '~/components/Logo.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: { Header, Logo, Footer },
    name: 'newProblem',
    data() {
        return {
            step:1,
            newProblem:{
                name:'something',
                sampleSet:'sample set',
                street:null,
                city:null,
                state:null,
                numtickets:0,
                shirtsize:'XL'
            }
        }
    },
    methods:{
        prev() {
            this.step--;
        },
        next() {
            // do some validation first!
            this.step++;
        },
        submit() {
            alert('Submit to blah and show blah and etc.');      
        }
    }
}
</script>

<style lang="scss">
@import './assets/css/style.scss';

#newProblem{
    .stepNum{}
}

</style>
