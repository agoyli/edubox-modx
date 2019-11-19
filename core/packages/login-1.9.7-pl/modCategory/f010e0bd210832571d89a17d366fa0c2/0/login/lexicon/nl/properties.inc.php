<?php
/**
 * @package login
 * @subpackage lexicon
 */
/* ForgotPassword snippet */
$_lang['prop_forgotpassword.emailtpl_desc'] = 'De bevestigingsemail template.';
$_lang['prop_forgotpassword.emailtpltype_desc'] = 'Het template type welke de emailTpl property bevat. Standaard een chunk.';
$_lang['prop_forgotpassword.senttpl_desc'] = 'De template met het bericht dat de e-mail is verstuurd.';
$_lang['prop_forgotpassword.senttpltype_desc'] = 'Het template type welke de sendTpl property bevat. Standaard een chunk.';
$_lang['prop_forgotpassword.tpl_desc'] = 'Het wachtwoord vergeten template.';
$_lang['prop_forgotpassword.tpltype_desc'] = 'Het template type welke de tpl property bevat. Standaard een chunk.';
$_lang['prop_forgotpassword.errtpl_desc'] = 'The tpl to wrap error messages in.';
$_lang['prop_forgotpassword.errtpltype_desc'] = 'The type of tpl to use for errTpl.';
$_lang['prop_forgotpassword.emailsubject_desc'] = 'Het onderwerp van de wachtwoord vergeten e-mail.';
$_lang['prop_forgotpassword.emailtplalt_desc'] = '(Optional) Plain-text alternative for the confirmation email message tpl.';
$_lang['prop_forgotpassword.resetresourceid_desc'] = 'Het id van het document waar gebruikers in de bevestigingsemail naartoe gelinkt worden, daar waar de ResetPassword snippet in staat.';

/* Login snippet */
$_lang['prop_login.actionkey_desc'] = 'De REQUEST variabele waar de de action in zou moeten staan.';
$_lang['prop_login.loginkey_desc'] = 'De login action key.';
$_lang['prop_login.logoutkey_desc'] = 'De logout action key.';
$_lang['prop_login.loginviaemail_desc'] = 'Enable login via username or email address.';
$_lang['prop_login.tpltype_desc'] = 'Het type van templates voor de inlog en uitlog formulieren.';
$_lang['prop_login.logintpl_desc'] = 'De inlog template.';
$_lang['prop_login.logouttpl_desc'] = 'De uitloggen template.';
$_lang['prop_login.prehooks_desc'] = 'Het script dat uitgevoerd word, voordat een gebruiker is in- of uitgelogd. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_login.posthooks_desc'] = 'Het script dat uitgevoerd word, nadat een gebruiker is in- of uitgelogd. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_login.errtpl_desc'] = 'De error template.';
$_lang['prop_login.errtpltype_desc'] = 'Het type voor de error template.';
$_lang['prop_login.loginresourceid_desc'] = 'Document ID waar de gebruiker na het inloggen heen gestuurd word. 0 is voor zichzelf.';
$_lang['prop_login.loginresourceparams_desc'] = 'A JSON object of parameters to append to the login redirection URL. Ex: {"test":123}';
$_lang['prop_login.logoutresourceid_desc'] = 'Document ID waar de gebruiker na het uitloggen heen gestuurd word. 0 is voor zichzelf.';
$_lang['prop_login.logoutresourceparams_desc'] = 'A JSON object of parameters to append to the logout redirection URL. Ex: {"test":123}';
$_lang['prop_login.loginmsg_desc'] = 'Optioneel label bericht voor inlog actie. Indien leeg, dan de standaard lexicon waarde voor Login.';
$_lang['prop_login.logoutmsg_desc'] = 'Optioneel label bericht voor uitlog actie. Indien leeg, dan de standaard lexicon waarde voor Uitlog.';
$_lang['prop_login.redirecttoprior_desc'] = 'Indien waar, stuur naar de voorgaande pagina (HTTP_REFERER) door, indien succesvol ingelogd.';
$_lang['prop_login.redirecttoonfailedauth_desc'] = 'If set to a non-zero number, will redirect the user to this page if their attempt to login is unsuccessful.';
$_lang['prop_login.rememberme_desc'] = 'Optioneel. De veldnaam van de Onthoud Mij checkbox om de inlogstatus te bepalen. Standaard `rememberme`.';
$_lang['prop_login.contexts_desc'] = '(Experimenteel) Een komma gescheiden lijst van contexts om op in te loggen. Standaard de huidige context indien niet nadrukkelijk gezet.';
$_lang['prop_login.toplaceholder_desc'] = 'Indien gezet, de login snippet output word dan in een placeholder met deze naam gezet in plaats van direct de output te tonen.';

/* Profile snippet */
$_lang['prop_profile.prefix_desc'] = 'Een string om alle placeholdes mee te beginnen, voor alle velden gezet door deze snippet.';
$_lang['prop_profile.user_desc'] = 'Optioneel. Ofwel een gebruikers ID of gebruikersnaam. Indien gezet, dan zal deze gebruiker gebruikt worden in plaats van de huidig ingelogde gebruiker.';
$_lang['prop_profile.useextended_desc'] = 'Al dan niet extra velden gebruiken in het profielformulier. Dit kan handig zijn voor het opslaan van extra gebruikersvelden.';

/* Register snippet */
$_lang['prop_register.submitvar_desc'] = 'De var om te controleren of de Register functonaleit word uigevoerd. Indien leeg of op onwaar gezet, Register zal op elke POST uitgevoerd worden.';
$_lang['prop_register.usergroups_desc'] = 'Optioneel. Een komma gescheiden lijst van gebruikersgroepnamen of IDs waar nieuwe gebruikers tot behoren.';
$_lang['prop_register.usergroupsfield_desc'] = 'The name of the field to use to specify the User Group(s) to automatically add the new User to. Only used if this value is not blank.';
$_lang['prop_register.submittedresourceid_desc'] = 'Indien gezet, dan word na het versturen van het registratieformulier de gebruiker naar dit Document ID gestuurd.';
$_lang['prop_register.usernamefield_desc'] = 'De te gebruiken naam van het veld voor de gebruikersnaam.';
$_lang['prop_register.passwordfield_desc'] = 'De te gebruiken naam van het veld voor het wachtwoord.';
$_lang['prop_register.emailfield_desc'] = 'De te gebruiken naam van het veld voor het e-mailadres.';
$_lang['prop_register.successmsg_desc'] = 'Optioneel. Indien niet word doorgestuurd naar de submittedResourceId parameter, dan zal dit bericht getoond worden.';
$_lang['prop_register.persistparams_desc'] = 'Optional. A JSON object of parameters to persist across the register process. Useful when using redirect on ConfirmRegister to redirect to another page (eg, for shopping carts).';
$_lang['prop_register.prehooks_desc'] = 'Welke scripts worden uitgevoerd, voordat het formulier gevalideerd word. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_register.posthooks_desc'] = 'Welke scripts worden uitgevoerd, nadat een gebruiker zich heeft geregistreerd. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_register.useextended_desc'] = 'Wel of niet extra velden instellen in het Profiel formulier. Dit kan handig zijn voor het opslaan van extra gebruikersvelden.';
$_lang['prop_register.excludeextended_desc'] = 'Een komma gescheiden lijst van uit te sluiten velden in de extra velden.';
$_lang['prop_register.activation_desc'] = 'Al dan niet verplicht om eerst de registratie te activeren. Indien waar, gebruikers zijn eerst inactief totdat zij hun account geactiveerd hebben. Standaard waar. Zal alleen werken als het registratieformulier een e-mailadres veld bevat.';
$_lang['prop_register.activationttl_desc'] = 'Aantal minuten totdat de activatie e-mail verloopt. Standaard 3 uur.';
$_lang['prop_register.activationresourceid_desc'] = 'Het document ID waar de ConfirmRegister snippet voor activatie zich bevindt.';
$_lang['prop_register.activationemail_desc'] = 'If set, will sent activation emails to this address instead of the newly registered user\'s address.';
$_lang['prop_register.activationemailsubject_desc'] = 'Het onderwerp van de activatie e-mail.';
$_lang['prop_register.activationemailtpltype_desc'] = 'Het template type voor de activatie e-mails';
$_lang['prop_register.activationemailtpl_desc'] = 'De activatie e-mail template.';
$_lang['prop_register.activationemailtplalt_desc'] = '(Optional) Plain-text alternative for the activation email tpl.';
$_lang['prop_register.moderatedresourceid_desc'] = 'If a prehook sets the user as moderated, then send to this Resource instead of the submittedResourceId. Leave blank to bypass.';
$_lang['prop_register.placeholderprefix_desc'] = 'The prefix to use for all placeholders set by this snippet.';
$_lang['prop_register.recaptchaheight_desc'] = 'Indien `recaptcha` is gezet als een preHook, selecteer je hiermee de hoogte van de reCaptcha widget.';
$_lang['prop_register.recaptchatheme_desc'] = 'Indien `recaptcha` is gezet als een preHook, selecteer je hiermee het thema van de reCaptcha widget.';
$_lang['prop_register.recaptchawidth_desc'] = 'Indien `recaptcha` is gezet als een preHook, selecteer je hiermee de breedte van de reCaptcha widget.';
$_lang['prop_register.mathminrange_desc'] = 'If `math` is set as a preHook, the minimum range for each number in the equation.';
$_lang['prop_register.mathmaxrange_desc'] = 'If `math` is set as a preHook, the maximum range for each number in the equation.';
$_lang['prop_register.mathfield_desc'] = 'If `math` is set as a preHook, the name of the input field for the answer.';
$_lang['prop_register.mathop1field_desc'] = 'If `math` is set as a preHook, the name of the field for the 1st number in the equation.';
$_lang['prop_register.mathop2field_desc'] = 'If `math` is set as a preHook, the name of the field for the 2nd number in the equation.';
$_lang['prop_register.mathoperatorfield_desc'] = 'If `math` is set as a preHook, the name of the field for the operator in the equation.';
$_lang['prop_register.validatepassword_desc'] = 'Whether or not to validate the sent password when registering. Recommended to leave this Yes unless you are generating your own password in a hook.';
$_lang['prop_register.generatepassword_desc'] = 'If set to Yes, Register will generate a random password for the user, overwriting any passed password. Useful for automatic generation of passwords.';
$_lang['prop_register.trimpassword_desc'] = 'If set to Yes, Register will trim the submitted password for whitespace.';
$_lang['prop_register.ensurePasswordStrength_desc'] = 'If set to Yes, Register will ensure the user enters a strong enough password. Strong passwords are passwords with multiple words or non-alphabetic characters in them.';
$_lang['prop_register.passwordWordSeparator_desc'] = 'If ensurePasswordStrength is set to Yes, this will be the separator between words when determining how many words are in a supplied password.';
$_lang['prop_register.minimumStrongPasswordWordCount_desc'] = 'If ensurePasswordStrength is set to Yes, if a supplied password has this many words, then it will be consider a strong password.';
$_lang['prop_register.maximumPossibleStrongerPasswords_desc'] = 'If ensurePasswordStrength is set to Yes, then this is the maximum amount of suggestions that Register can find to consider the supplied password "strong". Making this number higher makes the check more lenient; lower makes it tougher.';
$_lang['prop_register.ensurePasswordStrengthSuggestions'] = 'If ensurePasswordStrength is set to Yes, and the password fails the strength test, Register will supply this many number of suggestions to the user for their password.';
$_lang['prop_register.allowedfields_desc'] = 'If set, will limit the fields that are allowed to be set on the newly created user to this comma-separated list. Also restricts extended fields.';
$_lang['prop_register.removeexpiredregistrations_desc'] = 'If true, will remove registered users that have an expired, unused activation request and have never activated. It is recommended to leave this on to prevent spam.';
$_lang['prop_register.preservefieldsafterregister_desc'] = 'If true, data of registration fields will be saved after successfull registration. To reset fields data, set to false';
$_lang['prop_register.redirectUnsetDefaultParam_desc'] = 'If true, default parameters will be removed from redirected urls.';
$_lang['opt_register.chunk'] = 'Chunk';
$_lang['opt_register.file'] = 'Bestand';
$_lang['opt_register.inline'] = 'Inline';
$_lang['opt_register.embedded'] = 'Embedded';
$_lang['opt_register.blackglass'] = 'Zwart glas';
$_lang['opt_register.clean'] = 'Schoon';
$_lang['opt_register.red'] = 'Root';
$_lang['opt_register.white'] = 'Wit';
$_lang['opt_register.asc'] = 'Ascending';
$_lang['opt_register.desc'] = 'Descending';

/* ConfirmRegister snippet */
$_lang['prop_confirmregister.redirectto_desc'] = 'Optional. After a successful confirmation, redirect to this Resource.';
$_lang['prop_confirmregister.redirectparams_desc'] = 'Optional. A JSON object of parameters to pass when redirecting using redirectTo.';
$_lang['prop_confirmregister.redirectUnsetDefaultParam_desc'] = 'If true, default parameters will be removed from redirected urls.';
$_lang['prop_confirmregister.authenticate_desc'] = 'Authenticate and login the user to the current context after confirming registration. Defaults to true.';
$_lang['prop_confirmregister.authenticatecontexts_desc'] = 'Optional. A comma-separated list of contexts to authenticate to. Defaults to the current context.';
$_lang['prop_confirmregister.errorpage_desc'] = 'Optional. If set, will redirect user to a custom error page if they try to access the confirm register page with some validation error.';
$_lang['prop_confirmregister.activepage_desc'] = 'Optional. If set, will redirect user to a active error page if they try to access this the confirm register page with an already activated account.';

/* ResetPassword snippet */
$_lang['prop_resetpassword.tpl_desc'] = 'Het wachtwoord reset bericht template.';
$_lang['prop_resetpassword.tpltype_desc'] = 'Het type template. Standaard een Chunk.';
$_lang['prop_resetpassword.loginresourceid_desc'] = 'Het document waar gebruikers naar gestuurd worden na succesvolle bevestiging.';

/* UpdateProfile snippet */
$_lang['prop_updateprofile.allowedextendedfields_desc'] = 'Optional. If set, will restrict the fields that are updated in the Extended fields to the names of fields in this comma-separated list.';
$_lang['prop_updateprofile.allowedfields_desc'] = 'Optional. If set, will restrict the fields that are updated to the names of fields in this comma-separated list.';
$_lang['prop_updateprofile.emailfield_desc'] = 'The field name for the email field in the form.';
$_lang['prop_updateprofile.excludeextended_desc'] = 'Een komma gescheiden lijst van velden om uit te sluiten van instelling als extra velden.';
$_lang['prop_updateprofile.placeholderprefix_desc'] = 'The prefix to use for all placeholders set by this snippet.';
$_lang['prop_updateprofile.posthooks_desc'] = 'Welke scripts worden uitgevoed, nadat een gebruiker geregistreerd is. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_updateprofile.prehooks_desc'] = 'Welke scripts worden uitgevoerd, voordat het formulier gevalideerd word. Dit kan een komma gescheiden lijst van hooks zijn en als de eerste faalt dan word de volgende niet uitgevoerd. Een hook kan ook een snippet naam zijn.';
$_lang['prop_updateprofile.redirecttologin_desc'] = 'Indien een gebruiker niet ingelogd is en dit document opent, stuur hem naar de Unauthorized pagina.';
$_lang['prop_updateprofile.reloadonsuccess_desc'] = 'Indien waar, de pagina zal zichzelf doorsturen met een GET parameter om dubbele posts te voorkomen. Indien false, dan zal hij een simpele placeholder maken.';
$_lang['prop_updateprofile.submitvar_desc'] = 'De var voor het controleren of the Register functionaliteit geladen moet worden. Indien leeg of onwaar, Register zal voor elk POST verzoek geladen worden.';
$_lang['prop_updateprofile.syncusername_desc'] = 'Indien gezet op een kolomnaam in het profiel, UpdateProfile zal een poging doen om de gebruikersnaam te synchroniseren met dit veld na een succesvolle opslag.';
$_lang['prop_updateprofile.useextended_desc'] = 'Al dan niet om extra velden in het formulier te zetten. Dit kan handig zijn voor het opslaan van extra gebruikersvelden.';
$_lang['prop_updateprofile.user_desc'] = 'Optional. If specified, will load the user with the specified ID or username instead of the active user.';

/* ChangePassword snippet */
$_lang['prop_changepassword.submitvar_desc'] = 'The var to check for to load the ChangePassword functionality. If empty or set to false, ChangePassword will process the form on all POST requests.';
$_lang['prop_changepassword.fieldoldpassword_desc'] = 'The field name of the old password field.';
$_lang['prop_changepassword.fieldnewpassword_desc'] = 'The field name of the new password field.';
$_lang['prop_changepassword.fieldconfirmnewpassword_desc'] = 'Optional. If set, the field name of the confirm password field, and will be checked against the new password field during submission.';
$_lang['prop_changepassword.prehooks_desc'] = 'What scripts to fire, if any, after the form passes validation but before save. This can be a comma-separated list of hooks, and if the first fails, the proceeding ones will not fire. A hook can also be a Snippet name that will execute that Snippet.';
$_lang['prop_changepassword.posthooks_desc'] = 'What scripts to fire, if any, after the user has been registered. This can be a comma-separated list of hooks, and if the first fails, the proceeding ones will not fire. A hook can also be a Snippet name that will execute that Snippet.';
$_lang['prop_changepassword.redirecttologin_desc'] = 'If a user is not logged in and accesses this Resource, redirect them to the Unauthorized Page.';
$_lang['prop_changepassword.reloadonsuccess_desc'] = 'If true, the page will redirect to itself with a GET parameter to prevent double-postbacks. If false, it will simply set a success placeholder.';
$_lang['prop_changepassword.successmessage_desc'] = 'If reloadOnSuccess is set to false, output this message in the [prefix].successMessage placeholder.';
$_lang['prop_changepassword.placeholderprefix_desc'] = 'The prefix to use for all placeholders set by this snippet.';

/* isLoggedIn snippet */
$_lang['prop_isloggedin.contexts_desc'] = 'A comma-separated list of contexts to check authenticated status for. If not set, will default to current context.';
$_lang['prop_isloggedin.redirectto_desc'] = 'The ID of a Resource to redirect to should the user not be logged in. Will default to the unauthorized_page.';
$_lang['prop_isloggedin.redirectparams_desc'] = 'If using redirectTo, a JSON object of REQUEST params to send with the redirect.';

/* ActiveUsers snippet */
$_lang['prop_activeusers.tpl'] = 'The Chunk to use for outputting each active user.';
$_lang['prop_activeusers.tplType'] = 'The type of tpl being provided. Defaults to a Chunk.';
$_lang['prop_activeusers.sortBy'] = 'The field to sort by for the users.';
$_lang['prop_activeusers.sortDir'] = 'The direction to sort by for the users.';
$_lang['prop_activeusers.limit'] = 'The number of users to limit displaying.';
$_lang['prop_activeusers.offset'] = 'The start index of the limited number of users to show.';
$_lang['prop_activeusers.classKey'] = 'The class key to use when grabbing the users. Defaults to modUser. You can set this to a class name that extends modUser, if you wish.';
$_lang['prop_activeusers.placeholderprefix_desc'] = 'The prefix to use for all placeholders set by this snippet.';
$_lang['prop_activeusers.toplaceholder_desc'] = 'If set, will set the output of the snippet to a placeholder of this name rather than directly outputting the return contents.';
