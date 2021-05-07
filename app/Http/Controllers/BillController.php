<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Notification;
use App\Models\User;
use App\Notifications\MyFirstNotification;

class BillController extends Controller
{
    //
  


    public function index()
    {
        return view('index');
    }

    public function sendNotification()
    {
        $user = User::first();
  
        $details = [
            'greeting' => 'Hi Artisan',
            'body' => 'This is my first notification from ItSolutionStuff.com',
            'thanks' => 'Thank you for using ItSolutionStuff.com tuto!',
            'actionText' => 'View My Site',
            'actionURL' => url('/'),
            'order_id' => 101
        ];
  
        Notification::send($user, new MyFirstNotification($details));
   
        dd('done');
    }
}
