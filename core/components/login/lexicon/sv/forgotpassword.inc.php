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
$_lang['login.email'] = 'E-post';
$_lang['login.forgot_password'] = 'Glömt lösenord';
$_lang['login.forgot_password_email_subject'] = 'Förfrågan om nollställande av lösenord';
$_lang['login.forgot_password_email_text'] = '<p>Hej [[+username]],</p>
<p>klicka på den här länken för att aktivera ditt nya lösenord:</p>
<p><a href="[[+confirmUrl]]">[[+confirmUrl]]</a></p>
<p>Om det lyckas, kan du sen använda det här lösenordet för att logga in:</p>
<p><strong>Lösenord:</strong> [[+password]]</p>
<p>Om du inte förväntade dig det här meddelandet, vänligen ignorera det.</p>
<p>Tack,<br />
<em>[[++site_name]] Sajtadministratör</em></p>';
$_lang['login.or_forgot_username'] = 'Eller, glömt användarnamnet?';
$_lang['login.reset_password'] = 'Nollställ lösenord';
$_lang['login.username'] = 'Användarnamn';
$_lang['login.user_err_nf_email'] = 'Om användaren eller e-posten finns, får du ett mail inom kort.';
$_lang['login.user_err_nf_username'] = 'Om användaren eller e-posten finns, får du ett mail inom kort.';
