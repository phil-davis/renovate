import * as datasourceGitHubRelease from '../../datasource/github-releases';
import { logger } from '../../logger';
import { PackageDependency, PackageFile } from '../common';

export function extractPackageFile(content: string): PackageFile {
  logger.trace('terraform-version.extractPackageFile()');
  const dep: PackageDependency = {
    depName: 'hashicorp/terraform',
    currentValue: content.trim(),
    datasource: datasourceGitHubRelease.id,
  };
  return { deps: [dep] };
}
