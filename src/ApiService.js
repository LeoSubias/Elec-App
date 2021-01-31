import axios from "axios";

/*axios.post('http://localhost:3000/messages', {user: this.utilisateur.userName,text: this.messages, }).then(response => (
    console.log(response),
        this.GetRequestMessage()

    //this.messages = response.data
)).catch(error => console.log(error))

axios.get('http://localhost:3000/messages').then(response => (
    console.log(response),
        this.JsonMessage = response.data
    //this.messages = response.data
)).catch(error => console.log(error))*/

const ApiService = {

    DEBUG: (process.env.NODE_ENV !== 'production'),

    /**
     * Set le TOKEN
     * @param token
    setAccessToken: function(access_token){
        this.access_token = access_token;
        this.instance = axios.create({
            headers: {'Authorization': 'Bearer ' + this.access_token}
        })
    },*/

    /**
     * Get User
     * @param params
     */
    httpQueryGetUser: function(params = {})
    {
        const routeMessage = 'http://192.168.1.18:3000/users';

        return new Promise((resolve, reject) => {

            axios.get(routeMessage, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data);
                } else {
                    resolve(response.data.status);
                }

            }, response => {
                reject(response);
            });

        });
    },
    /**
     * Get UserId
     * @param params
     */
    httpQueryGetUserId: function( id = {})
    {
        const routeMessage = 'http://192.168.1.18:3000/users/'+id;

        axios.get(routeMessage, {id:id}).then(response =>
        {
            if(this.DEBUG) console.log(response);

            if (response.data.status != 'OK') {
                return console.log(response.data);
            } else {
                return console.log(response.data.status);
            }

        });

    },
    /**
     * Post Contact
     * @param params
     */
    httpQueryPostUser: function(params = {})
    {
        const routeMessage = 'http://192.168.1.18:3000/users';

        return new Promise((resolve, reject) => {

            axios.post(routeMessage,
                {params})
            .then(response => {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.lead);
                }

            }, response => {
                reject(response);
            });

        });
    },
    /*/!**
     * Get leads
     * @param params
     *!/
    httpQueryGetLeads: function(params = {})
    {
        var route;
        if(params.id){
            route = Routing.generate('app_api_get_leads', {id : params.id})
        } else {
            route = Routing.generate('app_api_get_leads')
        }
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.leads);
                }

            }, response => {
                reject(response);
            });

        });
    },

    httpQueryFindLeads: function(params = {})
    {
        return new Promise((resolve, reject) => {

            axios.get(Routing.generate('app_api_find_leads'), { params:params, headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                }}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.leads);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Update Status Lead
     * @param params
     *!/
    httpQueryUpdateStatusLead: function(params = {})
    {

        var route = Routing.generate('app_api_post_lead_status', {leadId: params.id, status: params.status});

        return new Promise((resolve, reject) => {

            this.instance.post(route,params).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.res);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Update Status Lead
     * @param params
     *!/
    httpQueryPostLead: function(params = {})
    {
        var param = JSON.parse(JSON.stringify(params));

        if(param.lead.notation)
            delete param.lead.notation

        if(param.lead.contact)
            delete param.lead.contact

        if(param.lead.parcelle)
            delete param.lead.parcelle

        if(param.lead.parcelles)
            delete param.lead.parcelles

        if(param.lead.created)
            delete param.lead.created


        var route = Routing.generate('app_api_post_lead_admin', {id: params.lead.id});

        return new Promise((resolve, reject) => {

            axios.post(route, qs.stringify(param), { headers: {
                    'Authorization': 'Bearer ' + this.access_token,
                }}).then(response => {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.lead);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get comments
     * @param params
     *!/
    httpQueryGetComments: function(params = {})
    {
        var route = Routing.generate('app_api_get_comments', { leadId : params.leadId});
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.comments);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Post Comments
     * @param params
     *!/
    httpQueryPostComments: function(params = {})
    {
        var route = Routing.generate('app_api_post_comments', {leadId : params.id, comment: params.comment});

        return new Promise((resolve, reject) => {

            this.instance.post(route,params).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.comments);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get History
     * @param params
     *!/
    httpQueryGetHistory: function(params = {})
    {
        var route = Routing.generate('app_api_get_history', { leadId : params.leadId});
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.history);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get History by User
     * @param params
     *!/
    httpQueryGetHistoryByUser: function(params = {})
    {
        console.log(params);
        if(params.id){
            var route = Routing.generate('app_api_get_history_user', {id:params.id});
        }else{
            var route = Routing.generate('app_api_get_history_user', {});
        }

        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.history);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get Csv Export
     * @param params
     *!/
    httpQueryGetCsvExport: function(params = {})
    {
        var route = Routing.generate('app_api_get_leads_export_csv', {});
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.statusText != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get Agence
     * @param params
     *!/
    httpQueryGetAgences: function(params = {})
    {
        var route = Routing.generate('app_api_get_agences', {});
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.agences);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Get Notation
     * @param params
     *!/
    httpQueryGetNotations: function(params = {})
    {
        var route = Routing.generate('app_api_get_notation', {});
        params.access_token = this.access_token;

        return new Promise((resolve, reject) => {

            axios.get(route, {params:params}).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.notation);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Post Notations
     * @param params
     *!/
    httpQueryPostNotations: function(params = {})
    {
        var route = Routing.generate('app_api_post_notations', {notations : params.notations, note : params.note});

        return new Promise((resolve, reject) => {

            this.instance.post(route,params).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.notations);
                }

            }, response => {
                reject(response);
            });

        });
    },

    /!**
     * Post Newsletters
     * @param params
     *!/
    httpQueryPostNewsletter: function(params = {})
    {
        var route = Routing.generate('api_post_newsletter', {});

        return new Promise((resolve, reject) => {

            this.instance.post(route,params).then(response =>
            {
                if(this.DEBUG) console.log(response);

                if (response.data.status != 'OK') {
                    reject(response.data.message);
                } else {
                    resolve(response.data.newsletter);
                }

            }, response => {
                reject(response);
            });

        });
    },


    routing: function(path, options){
        return Routing.generate(path, options);
    }*/
}

export default ApiService