<?php
if ($object->xpdo) {
    switch ($options[xPDOTransport::PACKAGE_ACTION]) {
        case xPDOTransport::ACTION_UPGRADE:
            /** @var modX $modx */
            $modx =& $object->xpdo;

            // http://forums.modx.com/thread/88734/package-version-check#dis-post-489104
            $c = $modx->newQuery('transport.modTransportPackage');
            $c->where(array(
                'workspace' => 1,
                "(SELECT
                    `signature`
                  FROM {$modx->getTableName('modTransportPackage')} AS `latestPackage`
                  WHERE `latestPackage`.`package_name` = `modTransportPackage`.`package_name`
                  ORDER BY
                     `latestPackage`.`version_major` DESC,
                     `latestPackage`.`version_minor` DESC,
                     `latestPackage`.`version_patch` DESC,
                     IF(`release` = '' OR `release` = 'ga' OR `release` = 'pl','z',`release`) DESC,
                     `latestPackage`.`release_index` DESC
                  LIMIT 1,1) = `modTransportPackage`.`signature`",
            ));
            
            $c->where(array(
                'modTransportPackage.package_name' => 'login',
                'installed:IS NOT' => null
            ));
            
            /** @var modTransportPackage $oldPackage */
            $oldPackage = $modx->getObject('transport.modTransportPackage', $c);
            $modelPath = $modx->getOption('login.core_path',null,$modx->getOption('core_path').'components/login/').'model/';
            
            $modx->addPackage('login',$modelPath);
            
            if ($oldPackage && $oldPackage->compareVersion('1.9.2-pl', '>')) {
                $namespace = $modx->getObject('modNamespace', array('name' => 'login'));
                if ($namespace) {
                    $namespace->set('path', '{core_path}components/login/');
                    $namespace->set('assets_path', '{assets_path}components/login/');
                    $namespace->save();
                }
            }
            
            break;
    }
}
return true;