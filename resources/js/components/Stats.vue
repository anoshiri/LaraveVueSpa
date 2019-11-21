<template>
    <ul>
        <li>Series: {{ series }}</li>
        <li>Sections: {{ sections }}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                series: 0,
                sections: 0
            }
        },

        created: function() {
            
            var myData = this;

            axios
                .get('/api/stats')
                .then(function (response) {
                    myData.series = response.data.series;
                    myData.sections = response.data.sections;

                    toastr('success', 'i am a toastr success', 'hello');
                })
                .catch(function (error) {
                    //toastr["error"](error);
                });
                  
        }

    }
</script>
