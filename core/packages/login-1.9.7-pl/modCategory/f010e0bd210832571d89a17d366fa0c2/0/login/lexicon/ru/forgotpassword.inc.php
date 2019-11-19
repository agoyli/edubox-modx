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
$_lang['login.email'] = 'Электронная почта';
$_lang['login.forgot_password'] = 'Забыли пароль?';
$_lang['login.forgot_password_email_subject'] = 'Адрес электронной почты для восстановления пароля';
$_lang['login.forgot_password_email_text'] = '<p>Здравствуйте [[+username]].</p>
<p>Чтобы активировать ваш новый пароль, пожалуйста, перейдите по ссылке:</p>
<p><a href="[[+confirmUrl]]">[[+confirmUrl]]</a></p>
<p>Если подтверждение пройдет успешно, вы сможете использовать следующий пароль для входа:</p>
<p><strong>пароль:</strong> [[+password]]</p>
<p>Если вы не запрашивали это сообщение, пожалуйста, игнорируйте его. Спасибо.</p>
<p><br />
<em>Администрация сайта [[++site_name]]</em></p>';
$_lang['login.or_forgot_username'] = 'Или забыли свое имя пользователя?';
$_lang['login.reset_password'] = 'Сбросить пароль';
$_lang['login.username'] = 'Имя пользователя';
$_lang['login.user_err_nf_email'] = 'Если пользователь или электронная почта существуют, вы вскоре получите электронное письмо.';
$_lang['login.user_err_nf_username'] = 'Если пользователь или электронная почта существуют, вы вскоре получите электронное письмо.';
