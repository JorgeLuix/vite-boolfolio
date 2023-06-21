<template>
    
    <section class="container m-4">
        <h2 class="text-uppercase">contact me</h2>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
        <div class="row">
            <form @submit.prevent="sendForm()" class="col-12 text-start">
                <div class="mb-3">
                    <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.name }" type="text"
                        name="name" id="name" placeholder="Name" v-model="name">
                </div>
                <div class="mb-3">
                    <input class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.email }" type="text"
                        name="address" id="address" placeholder="Email" v-model="address">
                </div>
                <div class="mb-3">
                    <textarea class="border-0 border-bottom form-control" :class="{ 'is-invalid': errors.message }"
                        name="body" id="body" cols="30" rows="10" placeholder="Message" v-model="body"></textarea>
                </div>
                <button class="btn btn-lg btn-success text-white" type="submit" :disabled="loading">{{ loading ?
                    'Invia...' : 'Invia'
                }}</button>
            </form>
        </div>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactUs',

    data() {
        return {
            store,
            name: '',
            address: '',
            body: '',
            loading: false,
            success: false,
            errors: {}
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                address: this.address,
                body: this.body
            };

           
            this.errors = {};

            axios.post(`${this.store.apiUrl}/contacts`, data).then((response) => {
                this.success = response.data.success;
                if (!this.success) {
                    this.errors = response.data.errors;
                } else {
                    // ripulisco i campi di input
                    this.name = '';
                    this.address = '';
                    this.body = '';
                }
                this.loading = false;
            });
        },
    }
}

</script>

<style lang="scss" scoped></style>