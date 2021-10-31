<?php

namespace App\Models;

use App\Models\Mentor;
use App\Models\Chapter;
use App\Models\ImageCourse;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s'
    ];

    protected $fillable = [
        'name', 'certificate', 'thumbnail', 'type',
        'status', 'price', 'level', 'description', 'mentor_id'
    ];

    public function mentor() {
        return $this->belongsTo(Mentor::class);
    }

    public function chapters() {
        return $this->hasMany(Chapter::class)->orderBy('id', 'ASC');
    }

    public function images() {
        return $this->hasMany(ImageCourse::class)->orderBy('id','DESC');
    }
}
