<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <style href="/css/app.css"></style>
    </head>
    <body>
        <div id="app">
            <div class="container mx-auto">
                <header class="py-6 mb-10">
                    <h1>My SPA</h1>
                </header>
            
                <main class="flex">
                    <aside class="w-1/5">
                        <ul>
                            <li><router-link to='/' exact>Home</router-link></li>
                            <li><router-link to='/about'>About</router-link></li>
                            <li><router-link to='/stats'>Stats</router-link></li>
                            <li><router-link to='/nothere'>Not Found</router-link></li>
                        </ul>
                    </aside>

                    <div class="primary">
                        <router-view></router-view>
                    </div>
                </main>
            
            </div>    


        </div>

        <script src="js/app.js"></script>
    </body>
</html>
