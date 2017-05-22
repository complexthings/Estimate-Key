<?php

namespace Seeder\Util;

/**
 * Class Check
 * @package Seeder\Util
 */
class Check
{
    /**
     * @return bool
     * @throws \Exception
     */
    public static function fileToUrlMapping()
    {
        global $_FILE_TO_URL_MAPPING;

        foreach ($_FILE_TO_URL_MAPPING as $path => $domain) {
            $last = substr($path, -1);
            if ($last === '/' || $last === '\\') {
                throw new \Exception("The path '{$path}' set in \$_FILE_TO_URL_MAPPING is invalid. Please remove the last '{$last}' from the path");
            }
        }

        return true;
    }
}
