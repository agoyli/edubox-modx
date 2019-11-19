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
$_lang['login.email'] = 'E-mail';
$_lang['login.forgot_password'] = 'Wachtwoord vergeten';
$_lang['login.forgot_password_email_subject'] = 'Nieuw wachtwoord e-mail';
$_lang['login.forgot_password_email_text'] = '<p>Hallo [[+username]],</p>
<p>Om uw nieuwe wachtwoord te activeren, klikt u op de volgende link:</p>
<p><a href="[[+confirmUrl]]">[[+ confirmUrl]]</a></p>
<p>Zodra dit gelukt is kunt u het volgende wachtwoord gebruiken om in te loggen:</p>
<p><strong>Wachtwoord:</strong> [[+password]]</p>
<p>Als u niet gevraagd heeft om dit bericht, kunt u dit negeren.</p>
<p>Bedankt,<br />
<em>[[++site_name]] - Sitebeheerder</em></p>';
$_lang['login.or_forgot_username'] = 'Of bent u uw gebruikersnaam vergeten?';
$_lang['login.reset_password'] = 'Wachtwoord herstellen';
$_lang['login.username'] = 'Gebruikersnaam';
$_lang['login.user_err_nf_email'] = 'Als de gebruiker of het e-mailadres bestaat, ontvangt u spoedig een e-mail.';
$_lang['login.user_err_nf_username'] = 'Als de gebruiker of het e-mailadres bestaat, ontvangt u spoedig een e-mail.';
