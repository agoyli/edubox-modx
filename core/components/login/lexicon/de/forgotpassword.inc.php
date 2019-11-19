<?php
/**
 * Login
 *
 * Copyright 2010 by Jason Coward <jason@modxcms.com> and Shaun McCormick
 * <shaun@modxcms.com>
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
 * Forgot Password English lexicon for Login
 *
 * @package login
 * @subpackage lexicon
 */
$_lang['login.email'] = 'E-Mail';
$_lang['login.forgot_password'] = 'Passwort vergessen';
$_lang['login.forgot_password_email_subject'] = 'Passwort-vergessen E-Mail';
$_lang['login.forgot_password_email_text'] = '<p>Hallo [[+username]],</p>
<p>um Ihr neues Passwort zu aktivieren, klicken Sie bitte auf den folgenden Link:</p>
<p><a href="[[+confirmUrl]]">[[+confirmUrl]]</a></p>
<p>Nachdem Sie dies erfolgreich gemacht haben, können Sie das folgende Passwort zum Einloggen benutzen:</p>
<p><strong>Passwort:</strong> [[+password]]</p>
<p>Wenn Sie diese Nachricht nicht angefordert haben, ignorieren Sie sie bitte.</p>
<p>Vielen Dank,<br />
<em>Ihre [[++site_name]] Websiteverwaltung</em></p>';
$_lang['login.or_forgot_username'] = 'Haben Sie Ihren Benutzernamen vergessen?';
$_lang['login.reset_password'] = 'Passwort zurücksetzen';
$_lang['login.username'] = 'Benutzername';
$_lang['login.user_err_nf_email'] = 'Wenn der Benutzer oder die E-Mail existiert, erhalten Sie in Kürze eine E-Mail.';
$_lang['login.user_err_nf_username'] = 'Wenn der Benutzer oder die E-Mail existiert, erhalten Sie in Kürze eine E-Mail.';
