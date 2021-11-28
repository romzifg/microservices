<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite4ad30db547c6902540e475b39e434fb
{
    public static $prefixLengthsPsr4 = array (
        'M' => 
        array (
            'Midtrans\\' => 9,
        ),
        'G' => 
        array (
            'Ghost\\TestMidtrans\\' => 19,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Midtrans\\' => 
        array (
            0 => __DIR__ . '/..' . '/midtrans/midtrans-php/Midtrans',
        ),
        'Ghost\\TestMidtrans\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite4ad30db547c6902540e475b39e434fb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite4ad30db547c6902540e475b39e434fb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite4ad30db547c6902540e475b39e434fb::$classMap;

        }, null, ClassLoader::class);
    }
}