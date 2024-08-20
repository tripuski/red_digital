<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <link rel="icon" href="{{ asset('assets/images/app/autodicol_logo_2.png') }}" /> --}}

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Pacni</title>
    <link href="{{ asset('assets/css/lib/bootstrap.min.css') }}" rel="stylesheet">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link href="{{ asset('assets/css/lib/fontawesome/css/fontawesome.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/lib/fontawesome/css/brands.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/lib/fontawesome/css/solid.css') }}" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('assets/css/app/login.css') }}" />

</head>

<body class="bg-light no-scrollbar">
    @yield('content')
    <script src="{{ asset('assets/js/lib/bootstrap.min.js') }}"></script>
</body>

</html>
