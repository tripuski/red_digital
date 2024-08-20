<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

//home
Route::get('/', [HomeController::class, 'index'])->name('home');


// Ruta de inicio de sesión
Route::get('login', [LoginController::class, 'index'])->name('login');

// Ruta de autenticación y cierre de sesión
Route::post('auth/login', [LoginController::class, 'login'])->name('auth.login');
Route::post('user/logout', [LoginController::class, 'logout'])->name('auth.logout');

// Formulario de inicio de sesión de usuario
Route::get('login/formUser', [LoginController::class, 'formUser'])->name('login/formUser');
Route::post('login/formUserRegister', [LoginController::class, 'formUserRegister'])->name('login/formUserRegister');

// Grupo de rutas protegidas por autenticación con prefijo y alias
Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['auth']], function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
