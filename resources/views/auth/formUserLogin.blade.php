@extends('layouts.login')
@section('content')
    <section class="bg-light p-3 p-md-4 p-xl-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-xxl-9">
                    <div class="card border-light-subtle shadow-sm">
                        <div class="row g-0">
                            <div class="col-12 col-md-6 d-none d-md-block">
                                <img class="img-fluid rounded-start w-80 h-80 object-fit-cover" loading="lazy"
                                    src="{{ asset('assets/img/img_1.jpg') }}" alt="img">
                            </div>
                            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                <div class="col-12 col-lg-11 col-xl-10">
                                    <div class="card-body p-3 p-md-4 p-xl-5">

                                        <h2 class="text-center mb-4">Registro</h2>

                                        <form method="POST" action="{{ route('login/formUserRegister') }}">
                                            @csrf
                                            <div class="row gy-3 overflow-hidden">

                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control" name="first_name"
                                                            id="first_name" placeholder="Nombre" required>
                                                        <label for="first_name" class="form-label">Nombre <b
                                                                class="text-danger">*</b></label>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="email" class="form-control" name="email"
                                                            id="email" placeholder="name@example.com" required>
                                                        <label for="email" class="form-label">Correo <b
                                                                class="text-danger">*</b></label>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control" name="password"
                                                            id="password" placeholder="Contraseña" required>
                                                        <label for="password" class="form-label">Contraseña <b
                                                                class="text-danger">*</b></label>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="form-floating mb-3">
                                                        <input type="password" class="form-control"
                                                            name="password_confirmation" id="password_confirmation"
                                                            placeholder="Confirmar Contraseña" required>
                                                        <label for="password_confirmation" class="form-label">Confirmar
                                                            Contraseña <b class="text-danger">*</b></label>
                                                    </div>
                                                </div>

                                                <div class="col-12">
                                                    <div class="d-grid">
                                                        <button
                                                            class="btn btn-dark btn-lg"type="submit">Registrarse</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-12">
                                                <div
                                                    class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                    <a
                                                        href="{{ route('login') }}"class="link-secondary text-decoration-none">Regresar</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
