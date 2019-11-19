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
$_lang['login.email'] = 'البريد الإلكتروني';
$_lang['login.forgot_password'] = 'نسيت كلمة المرور';
$_lang['login.forgot_password_email_subject'] = 'رسالة استرجاع كلمة المرور';
$_lang['login.forgot_password_email_text'] = '<p>Hello [[+username]],</p>
<p>to activate your new password, please click on the following link:</p>
<p><a href="[[+confirmUrl]]">[[+confirmUrl]]</a></p>
<p>If successful, you can use the following password to login:</p>
<p><strong>Password:</strong> [[+password]]</p>
<p>If you did not request this message, please ignore it.</p>
<p>Thanks,<br />
<em>[[++site_name]] Site Administration</em></p>';
$_lang['login.or_forgot_username'] = 'أو، نسيت اسم المستخدم؟';
$_lang['login.reset_password'] = 'إعادة تعيين كلمة المرور';
$_lang['login.username'] = 'اسم المستخدم';
$_lang['login.user_err_nf_email'] = 'إذا كان المستخدم أو البريد الإلكتروني موجودا، فستتلقى رسالة إلكترونية قريبا.';
$_lang['login.user_err_nf_username'] = 'إذا كان المستخدم أو البريد الإلكتروني موجودا، فستتلقى رسالة إلكترونية قريبا.';
