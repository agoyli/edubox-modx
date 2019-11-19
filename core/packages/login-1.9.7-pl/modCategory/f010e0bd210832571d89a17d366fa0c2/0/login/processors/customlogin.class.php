<?php
/**
 * Login
 *
 * Copyright 2010 by Jason Coward <jason@modx.com> and Shaun McCormick <shaun+login@modx.com>
 *
 * Login is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your option) any
 * later version.
 *
 * Login is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Login; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @package login
 */
/**
 * Custom login processor to enable login via username or email address (either one!)
 *
 * @package login
 * @subpackage processors
 */
require_once MODX_CORE_PATH.'model/modx/processors/security/login.class.php';

class CustomLoginProcessor extends modSecurityLoginProcessor {

    /**
     * {@inheritDoc}
     *
     * @return bool|null|string
     */
    public function getUser() {

        // Only accept login via email address if it exists only once!
        $count = $this->modx->getCount('modUserProfile', array(
            'email' => $this->username,
        ));
        if ($count > 1) {
            $criteria = array ('modUser.username' => $this->username);
        } else {
            $criteria = array(
                array('modUser.username' => $this->username),
                array('OR:Profile.email:=' => $this->username)
            );
        }

        /** @var $user modUser */
        $this->user = $this->modx->getObjectGraph('modUser', '{"Profile":{},"UserSettings":{}}', $criteria);
        return $this->fireOnUserNotFoundEvent();
    }
}
return 'CustomLoginProcessor';
