<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = request()->only('email', 'password');
        $user = User::where('email', $request->email)->get()->take(1);
        if (count($user) != 0) {
            if ($user[0]['status'] == 0) {
                return redirect()->to('/')->with('message', 'No puedes ingresar a este sistema de información');
            }
        }

        if (Auth::attempt($credentials)) {
            return redirect()->to('admin/home')->with('message', 'Bienvenido');
        } else {
            return redirect()->to('/')->with('message', 'Las credenciales de ingreso son incorrectas.');
        }
    }

    public function formUser()
    {
        return view('auth.formUserLogin');
    }

    public function formUserRegister(Request $request)
    {

        $user = User::create($request->all());
        
        if ($user) {
            return redirect()->to('admin/home')->with('message', 'Bienvenido'); 
        }
        // $user->permissions()->sync($request->permissions);
        // return redirect()->route('admin.users.index')->with('message', 'Usuario creado exitosamente');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->to('/')->with('message', 'Sesión cerrada.');
    }
}
